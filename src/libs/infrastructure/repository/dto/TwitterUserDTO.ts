import { AxiosResponse } from 'axios';
import { IRetrieveTwitterUserResponse } from '@libs/domain/repository';

interface ITwitterUserDTO {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

export class TwitterUserDTO implements ITwitterUserDTO {
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly description: string;

  constructor(init: ITwitterUserDTO) {
    this.id = init.id;
    this.name = init.name;
    this.imageUrl = init.imageUrl
    this.description = init.description;
  }

  static fromRes(res: AxiosResponse<IRetrieveTwitterUserResponse>) {
    const data = res.data;
    return new TwitterUserDTO({
      id: data.id,
      name: data.name,
      imageUrl: data.imageUrl,
      description: data.description,
    });
  }
}
