interface IRecruiter {
  name: string;
  profile: string;
  message: string;
  imageUrl: string;
  twitterUrl: string;
}

export class Recruiter implements IRecruiter {

  
  public readonly name: string;
  public readonly profile: string;
  public readonly message: string;
  public readonly imageUrl: string;
  public readonly twitterUrl: string;

  constructor(init: IRecruiter) {
    this.name = init.name;
    this.profile = init.profile;
    this.message = init.message;
    this.imageUrl = init.imageUrl;
    this.twitterUrl = init.twitterUrl;
  }
}

export class RecruiterId {
  readonly value: string;

  constructor(_value: string) {
    this.value = _value;
  }

  isEqualTo(other: RecruiterId) {
    return this.value === other.value;
  }
}
