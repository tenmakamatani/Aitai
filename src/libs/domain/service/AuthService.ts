export abstract class AuthService {
  abstract async loginWithTwitter(): Promise<void>;
  abstract async logout(): Promise<void>;
}
