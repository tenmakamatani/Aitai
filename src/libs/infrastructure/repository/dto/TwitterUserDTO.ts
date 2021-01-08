import { AxiosResponse } from 'axios';
import { IRetrieveTwitterUserResponse } from '@libs/domain/repository';

interface ITwitterUserDTO {
  name: string;
  imageUrl: string;
  profileUrl: string;
}

export class TwitterUserDTO implements ITwitterUserDTO {
  readonly name: string;
  readonly imageUrl: string;
  readonly profileUrl: string;

  constructor(init: ITwitterUserDTO) {
    this.name = init.name;
    this.imageUrl = init.imageUrl;
    this.profileUrl = init.profileUrl;
  }

  static fromRes(res: AxiosResponse<IRetrieveTwitterUserResponse>) {
    const data = res.data;
    return new TwitterUserDTO({
      name: data.name,
      imageUrl: data.imageUrl,
      profileUrl: data.profileUrl
    });
  }
}
