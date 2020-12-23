import { injectable } from 'inversify';
import { AuthService } from '@libs/domain/service/AuthService';
import { firebase } from '../firebase';

@injectable()
export class FirebaseAuthService extends AuthService {
  async loginWithTwitter(): Promise<void> {
    const provider = new firebase.auth.TwitterAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
  }
  async logout(): Promise<void> {
    await firebase.auth().signOut();
  }
}
