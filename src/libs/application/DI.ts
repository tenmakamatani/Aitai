import 'reflect-metadata';
import { Container } from "inversify";
import { ApplicantRepository, RecruiterRepository } from '@libs/domain/repository';
import {
  FirestoreApplicantRepository,
  FirestoreRecruiterRepository,
} from '@libs/infrastructure/repository';
import { AuthService } from '@libs/domain/service/AuthService';
import { FirebaseAuthService } from '@libs/infrastructure/service/FirebaseAuthService';

const container = new Container();

export class DIContainer {
  static setup(): void {
    container
      .bind<ApplicantRepository>(TYPES.ApplicantRepository)
      .to(FirestoreApplicantRepository)
      .inSingletonScope();
    container
      .bind<RecruiterRepository>(TYPES.RecruiterRepository)
      .to(FirestoreRecruiterRepository)
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
  static get authService() {
    return container.get<AuthService>(TYPES.AuthService);
  }
}

const TYPES = {
  ApplicantRepository: Symbol.for('ApplicantRepository'),
  RecruiterRepository: Symbol.for('RecruiterRepository'),
  AuthService: Symbol.for('AuthService'),
} as const;
