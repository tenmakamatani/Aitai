import { firebase } from '../../firebase';

interface IRecruiterDTO {
  id?: string;
  name: string;
  profile: string;
  message: string;
  imageUrl: string;
  twitterUrl: string;
}

export class RecruiterDTO implements IRecruiterDTO {
  readonly id?: string;
  readonly name: string;
  readonly profile: string;
  readonly message: string;
  readonly imageUrl: string;
  readonly twitterUrl: string;

  constructor(init: IRecruiterDTO) {
    this.id = init.id;
    this.name = init.name;
    this.profile = init.profile;
    this.message = init.message;
    this.imageUrl = init.imageUrl;
    this.twitterUrl = init.twitterUrl;
  }

  static fromDoc(doc: firebase.firestore.DocumentSnapshot) {
    const id = doc.id;
    const data = doc.data() as Omit<IRecruiterDTO, 'id'>;
    return new RecruiterDTO({
      id: id,
      name: data.name,
      profile: data.profile,
      message: data.message,
      imageUrl: data.imageUrl,
      twitterUrl: data.twitterUrl
    });
  }

  toJson(): Omit<IRecruiterDTO, 'id'> {
    return {
      name: this.name,
      profile: this.profile,
      message: this.message,
      imageUrl: this.imageUrl,
      twitterUrl: this.twitterUrl
    };
  }
}
