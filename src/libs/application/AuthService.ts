import { firebase } from '@libs/infrastructure/firebase';

export class AuthService {
  static async loginWithTwitter(): Promise<void> {
    const provider = new firebase.auth.TwitterAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
  }

  static async logout(): Promise<void> {
    await firebase.auth().signOut();
  }
}
