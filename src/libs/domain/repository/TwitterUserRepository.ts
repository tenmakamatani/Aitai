import { injectable } from 'inversify';
import { TwitterUser } from '../model';

export interface IRetrieveTwitterUserRequest {
  accessToken: string;
  secret: string;
}

export interface IRetrieveTwitterUserResponse {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

@injectable()
export abstract class TwitterUserRepository {
  abstract async retrieve(params: IRetrieveTwitterUserRequest): Promise<TwitterUser>;
}
