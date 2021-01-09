export interface ITwitterUser {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

export class TwitterUser implements ITwitterUser {
  public readonly id: string;
  public readonly name: string;
  public readonly imageUrl: string;
  public readonly description: string;

  constructor(init: ITwitterUser) {
    this.id = init.id;
    this.name = init.name;
    this.imageUrl = init.imageUrl;
    this.description = init.description;
  }
}
