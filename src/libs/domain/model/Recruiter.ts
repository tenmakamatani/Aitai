import { Id } from './Id';
import { TwitterUser } from './TwitterUser';

interface IRecruiter {
  id?: RecruiterId;
  name: string;
  description: string;
  imageUrl: string;
  twitterUrl: string;
}

export class Recruiter implements IRecruiter {
  public readonly id?: RecruiterId;
  public readonly name: string;
  public readonly description: string;
  public readonly imageUrl: string;
  public readonly twitterUrl: string;

  constructor(init: IRecruiter) {
    this.id = init.id;
    this.name = init.name;
    this.description = init.description;
    this.imageUrl = init.imageUrl;
    this.twitterUrl = init.twitterUrl;
  }

  static fromTwitterUser(twitterUser: TwitterUser) {
    return new Recruiter({
      name: twitterUser.name,
      description: twitterUser.description,
      imageUrl: twitterUser.imageUrl,
      twitterUrl: twitterUser.profileUrl,
    })
  }
}

export class RecruiterId extends Id {}
