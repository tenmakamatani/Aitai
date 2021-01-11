import 'reflect-metadata';
import { Container } from "inversify";
import {
  ApplicantRepository,
  RecruiterRepository,
  TwitterUserRepository
} from '@libs/domain/repository';
import {
  FirestoreApplicantRepository,
  FirestoreRecruiterRepository,
  AxiosTwitterUserRepository,
} from '@libs/infrastructure/repository';
import { AuthService } from '@libs/domain/service';
import { FirebaseAuthService } from '@libs/infrastructure/service';

const container = new Container();

export class DIContainer {
  static setup(): void {
    container.unbindAll();
    container
      .bind<ApplicantRepository>(TYPES.ApplicantRepository)
      .to(FirestoreApplicantRepository)
      .inSingletonScope();
    container
      .bind<RecruiterRepository>(TYPES.RecruiterRepository)
      .to(FirestoreRecruiterRepository)
      .inSingletonScope();
    container
      .bind<TwitterUserRepository>(TYPES.TwitterUserRepository)
      .to(AxiosTwitterUserRepository)
      .inSingletonScope();
    container
      .bind<AuthService>(TYPES.AuthService)
      .to(FirebaseAuthService)
      .inSingletonScope();
  }

  static get applicantRepo() {
    return container.get<ApplicantRepository>(TYPES.ApplicantRepository);
  }
  static get recruiterRepo() {
    return container.get<RecruiterRepository>(TYPES.RecruiterRepository);
  }
  static get twitterUserRepo() {
    return container.get<TwitterUserRepository>(TYPES.TwitterUserRepository);
  }
  static get authService() {
    return container.get<AuthService>(TYPES.AuthService);
  }
}

const TYPES = {
  ApplicantRepository: Symbol.for('ApplicantRepository'),
  RecruiterRepository: Symbol.for('RecruiterRepository'),
  TwitterUserRepository: Symbol.for('TwitterUserRepository'),
  AuthService: Symbol.for('AuthService'),
} as const;
