interface ITwitterUser {
  name: string;
  imageUrl: string;
  profileUrl: string;
  description: string;
}

export class TwitterUser implements ITwitterUser {
  public readonly name: string;
  public readonly imageUrl: string;
  public readonly profileUrl: string;
  public readonly description: string;

  constructor(init: ITwitterUser) {
    this.name = init.name;
    this.imageUrl = init.imageUrl;
    this.profileUrl = init.profileUrl;
    this.description = init.description;
  }
}
