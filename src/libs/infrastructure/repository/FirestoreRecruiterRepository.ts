import { Recruiter, RecruiterId } from '@libs/domain/model';
import { RecruiterRepository } from '@libs/domain/repository';
import { firebase } from '../firebase';
import { FirestoreCollectionIds, firestoreVersion } from '../firestoreConfig';
import { RecruiterAssembler } from './assembler/RecruiterAssembler';
import { RecruiterDTO } from './dto/RecruiterDTO';

export class FirestoreRecruiterRepository extends RecruiterRepository {

  private _firestore = firebase.firestore();

  async create(recruiter: Recruiter): Promise<void> {
    const dto = RecruiterAssembler.encode(recruiter);
    await this._firestore
      .collection(FirestoreCollectionIds.v)
      .doc(firestoreVersion)
      .collection(FirestoreCollectionIds.recruiters)
      .add(dto.toJson());
  }

  async retrieve(recruiterId: RecruiterId): Promise<Recruiter> {
    const doc = await this._firestore
      .collection(FirestoreCollectionIds.v)
      .doc(firestoreVersion)
      .collection(FirestoreCollectionIds.recruiters)
      .doc(recruiterId.value)
      .get();
    const dto = RecruiterDTO.fromDoc(doc);
    return RecruiterAssembler.decode(dto);
  }
}
