import { injectable } from 'inversify';

@injectable()
export abstract class AuthService {
  abstract async loginWithTwitter(): Promise<void>;
  abstract async logout(): Promise<void>;
}
