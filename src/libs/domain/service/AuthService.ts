import { injectable } from 'inversify';
import { firebase } from '@libs/infrastructure/firebase';

@injectable()
export abstract class AuthService {
  abstract async loginWithTwitter(): Promise<firebase.auth.UserCredential>;
  abstract async logout(): Promise<void>;
}
