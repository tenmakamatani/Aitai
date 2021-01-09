import { firebase } from '../../firebase';

interface IRecruiterDTO {
  id?: string;
  name: string;
  description: string;
  imageUrl: string;
  twitterId: string;
}

export class RecruiterDTO implements IRecruiterDTO {
  readonly id?: string;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly twitterId: string;

  constructor(init: IRecruiterDTO) {
    this.id = init.id;
    this.name = init.name;
    this.description = init.description;
    this.imageUrl = init.imageUrl;
    this.twitterId = init.twitterId;
  }

  static fromDoc(doc: firebase.firestore.DocumentSnapshot) {
    const id = doc.id;
    const data = doc.data() as IRecruiterDTO;
    return new RecruiterDTO({
      id: id,
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
      twitterId: data.twitterId
    });
  }

  toJson(): IRecruiterDTO {
    return {
      name: this.name,
      description: this.description,
      imageUrl: this.imageUrl,
      twitterId: this.twitterId
    };
  }
}
