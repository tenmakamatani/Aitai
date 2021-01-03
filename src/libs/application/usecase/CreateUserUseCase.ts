import { firebase } from '@libs/infrastructure/firebase';
import { DIContainer } from '../DI';

interface TwitterAuthCredential extends firebase.auth.AuthCredential {
  accessToken: string;
  secret: string;
}

export class CreateUserUseCase {
  static async execute() {
    // Repository, Serviceを初期化
    const recruiterRepo = DIContainer.recruiterRepo;
    const authService = DIContainer.authService;

    // Twitterログイン
    const result = await authService.loginWithTwitter();
    if (!result.credential) return;
    const credential = result.credential as TwitterAuthCredential;
  }
}
