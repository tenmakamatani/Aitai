import { injectable } from 'inversify';
import { TwitterUser } from '../model';

export interface IRetrieveTwitterUserRequest {
  accessToken: string;
  secret: string;
}

export interface IRetrieveTwitterUserResponse {
  name: string;
  imageUrl: string;
  profileUrl: string;
}

@injectable()
export abstract class TwitterUserRepository {
  abstract async retrieve(params: IRetrieveTwitterUserRequest): Promise<TwitterUser>;
}
