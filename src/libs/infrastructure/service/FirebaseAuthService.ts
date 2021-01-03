import { injectable } from 'inversify';
import { AuthService } from '@libs/domain/service/AuthService';
import { firebase } from '../firebase';

@injectable()
export class FirebaseAuthService extends AuthService {
  async loginWithTwitter(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.TwitterAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    return result;
  }
  async logout(): Promise<void> {
    await firebase.auth().signOut();
  }
}
