import { Id } from './Id';

export interface IApplicant {
  id?: ApplicantId;
  name: string;
  imageUrl: string;
  twitterUrl: string;
}

export class Applicant implements IApplicant {
  public readonly id?: ApplicantId;
  public readonly name: string;
  public readonly imageUrl: string;
  public readonly twitterUrl: string;

  constructor(init: IApplicant) {
    this.id = init.id;
    this.name = init.name;
    this.imageUrl = init.imageUrl;
    this.twitterUrl = init.twitterUrl
  }

  toInterface(): IApplicant {
    return {
      id: this.id,
      name: this.name,
      imageUrl: this.imageUrl,
      twitterUrl: this.twitterUrl,
    }
  }
}

export class ApplicantId extends Id {}
