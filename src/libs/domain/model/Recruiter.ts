import { Id } from './Id';
import { TwitterUser } from './TwitterUser';

export interface IRecruiter {
  id?: string;
  name: string;
  description: string;
  imageUrl: string;
  twitterId: string;
}

export class Recruiter {
  public readonly id: RecruiterId;
  public readonly name: string;
  public readonly description: string;
  public readonly imageUrl: string;
  public readonly twitterId: string;

  constructor(init: IRecruiter) {
    this.id = new RecruiterId(init.id);
    this.name = init.name;
    this.description = init.description;
    this.imageUrl = init.imageUrl;
    this.twitterId = init.twitterId;
  }

  toInterface(): IRecruiter {
    return {
      id: this.id?.value,
      name: this.name,
      description: this.description,
      imageUrl: this.imageUrl,
      twitterId: this.twitterId,
    }
  }

  static fromTwitterUser(twitterUser: TwitterUser) {
    return new Recruiter({
      name: twitterUser.name,
      description: twitterUser.description,
      imageUrl: twitterUser.imageUrl,
      twitterId: twitterUser.id,
    })
  }
}

export class RecruiterId extends Id {}
