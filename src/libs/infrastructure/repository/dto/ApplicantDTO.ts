import { firebase } from '../../firebase';

interface IApplicantDTO {
  id?: string;
  name: string;
  imageUrl: string;
  twitterUrl: string;
}

export class ApplicantDTO implements IApplicantDTO {
  readonly id?: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly twitterUrl: string;

  constructor(init: IApplicantDTO) {
    this.id = init.id;
    this.name = init.name;
    this.imageUrl = init.imageUrl;
    this.twitterUrl = init.twitterUrl;
  }

  static fromDoc(doc: firebase.firestore.DocumentSnapshot) {
    const id = doc.id;
    const data = doc.data() as IApplicantDTO;
    return new ApplicantDTO({
      id: id,
      name: data.name,
      imageUrl: data.imageUrl,
      twitterUrl: data.twitterUrl,
    });
  }

  toJson(): IApplicantDTO {
    return {
      name: this.name,
      imageUrl: this.imageUrl,
      twitterUrl: this.twitterUrl,
    }
  }
}
