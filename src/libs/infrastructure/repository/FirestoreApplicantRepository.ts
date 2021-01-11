import { injectable } from 'inversify';
import { Applicant, RecruiterId } from '@libs/domain/model';
import { ApplicantRepository } from '@libs/domain/repository';
import { firebase } from '../firebase';
import { FirestoreCollectionIds, firestoreVersion } from '../firestoreConfig';
import { ApplicantAssembler } from './assembler/ApplicantAssembler';
import { ApplicantDTO } from './dto/ApplicantDTO';

@injectable()
export class FirestoreApplicantRepository extends ApplicantRepository {
  async retrieve(recruiterId: RecruiterId): Promise<Applicant[]> {
    const snap = await firebase.firestore()
      .collection(FirestoreCollectionIds.v)
      .doc(firestoreVersion)
      .collection(FirestoreCollectionIds.recruiters)
      .doc(recruiterId.value)
      .collection(FirestoreCollectionIds.applicants)
      .get();
    const applicants = snap.docs.map((doc) => {
      const dto = ApplicantDTO.fromDoc(doc);
      return ApplicantAssembler.decode(dto);
    });
    return applicants;
  }

  async isApplying(recruiterId: RecruiterId): Promise<boolean> {
    const credential = firebase.auth().currentUser;
    if (!credential) return false;
    const doc = await firebase.firestore()
      .collection(FirestoreCollectionIds.v)
      .doc(firestoreVersion)
      .collection(FirestoreCollectionIds.recruiters)
      .doc(recruiterId.value)
      .collection(FirestoreCollectionIds.applicants)
      .doc(credential.uid)
      .get();
    return doc.exists;
  }

  async apply(recruiterId: RecruiterId): Promise<void> {
    const credential = firebase.auth().currentUser;
    if (!credential) return;
    const myId = credential.uid;
    const myDoc = await firebase.firestore()
      .collection(FirestoreCollectionIds.v)
      .doc(firestoreVersion)
      .collection(FirestoreCollectionIds.recruiters)
      .doc(myId)
      .get();
    const myApplicantDTO = ApplicantDTO.fromDoc(myDoc);
    await firebase.firestore()
      .collection(FirestoreCollectionIds.v)
      .doc(firestoreVersion)
      .collection(FirestoreCollectionIds.recruiters)
      .doc(recruiterId.value)
      .collection(FirestoreCollectionIds.applicants)
      .doc(myId)
      .set(myApplicantDTO.toJson());
  }

  async cancel(recruiterId: RecruiterId): Promise<void> {
    const credential = firebase.auth().currentUser;
    if (!credential) return;
    await firebase.firestore()
      .collection(FirestoreCollectionIds.v)
      .doc(firestoreVersion)
      .collection(FirestoreCollectionIds.recruiters)
      .doc(recruiterId.value)
      .collection(FirestoreCollectionIds.applicants)
      .doc(credential.uid)
      .delete();
  }
}
