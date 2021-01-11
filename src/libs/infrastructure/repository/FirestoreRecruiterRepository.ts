import { injectable } from 'inversify';
import { Recruiter, RecruiterId } from '@libs/domain/model';
import { RecruiterRepository } from '@libs/domain/repository';
import { firebase } from '../firebase';
import { FirestoreCollectionIds, firestoreVersion } from '../firestoreConfig';
import { RecruiterAssembler } from './assembler/RecruiterAssembler';
import { RecruiterDTO } from './dto/RecruiterDTO';

@injectable()
export class FirestoreRecruiterRepository extends RecruiterRepository {
  async createMyRecruiter(recruiter: Recruiter): Promise<void> {
    const credential = firebase.auth().currentUser;
    if (!credential) return;
    const dto = RecruiterAssembler.encode(recruiter);
    await firebase.firestore()
      .collection(FirestoreCollectionIds.v)
      .doc(firestoreVersion)
      .collection(FirestoreCollectionIds.recruiters)
      .doc(credential.uid)
      .set(dto.toJson());
  }

  async retrieve(recruiterId: RecruiterId): Promise<Recruiter> {
    const doc = await firebase.firestore()
      .collection(FirestoreCollectionIds.v)
      .doc(firestoreVersion)
      .collection(FirestoreCollectionIds.recruiters)
      .doc(recruiterId.value)
      .get();
    const dto = RecruiterDTO.fromDoc(doc);
    return RecruiterAssembler.decode(dto);
  }

  async retrieveFromTwitterId(twitterId: string): Promise<Recruiter> {
    const snap = await firebase.firestore()
      .collection(FirestoreCollectionIds.v)
      .doc(firestoreVersion)
      .collection(FirestoreCollectionIds.recruiters)
      .where('twitterId', '==', twitterId)
      .limit(1)
      .get();
    if (snap.docs.length === 0) {
      throw new Error('There is no recruiter.');
    };
    const dto = RecruiterDTO.fromDoc(snap.docs[0]);
    return RecruiterAssembler.decode(dto);
  }
}
