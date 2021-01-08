import { firebase } from '../../firebase';

interface IRecruiterDTO {
  id?: string;
  name: string;
  description: string;
  imageUrl: string;
  twitterUrl: string;
}

export class RecruiterDTO implements IRecruiterDTO {
  readonly id?: string;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly twitterUrl: string;

  constructor(init: IRecruiterDTO) {
    this.id = init.id;
    this.name = init.name;
    this.description = init.description;
    this.imageUrl = init.imageUrl;
    this.twitterUrl = init.twitterUrl;
  }

  static fromDoc(doc: firebase.firestore.DocumentSnapshot) {
    const id = doc.id;
    const data = doc.data() as IRecruiterDTO;
    return new RecruiterDTO({
      id: id,
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
      twitterUrl: data.twitterUrl
    });
  }

  toJson(): IRecruiterDTO {
    return {
      name: this.name,
      description: this.description,
      imageUrl: this.imageUrl,
      twitterUrl: this.twitterUrl
    };
  }
}
