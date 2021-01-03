interface IApplicant {
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
}

export class ApplicantId {
  readonly value: string;

  constructor(_value: string) {
    this.value = _value;
  }

  isEqualTo(other: ApplicantId) {
    return this.value === other.value;
  }
}
