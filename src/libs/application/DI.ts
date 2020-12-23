import 'reflect-metadata';
import { Container } from "inversify";
import { AuthService } from '@libs/domain/service/AuthService';
import { FirebaseAuthService } from '@libs/infrastructure/service/FirebaseAuthService';

const container = new Container();

export class DIContainer {
  static setup(): void {
    container
      .bind<AuthService>(TYPES.AuthService)
      .to(FirebaseAuthService)
      .inSingletonScope();
  }

  static get authService() {
    return container.get<AuthService>(TYPES.AuthService);
  }
}

const TYPES = {
  AuthService: Symbol.for('AuthService'),
} as const;
