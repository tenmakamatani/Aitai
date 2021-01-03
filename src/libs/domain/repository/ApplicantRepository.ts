import { injectable } from 'inversify';
import { Applicant, RecruiterId } from "../model";

@injectable()
export abstract class ApplicantRepository {
  abstract async retrieve(recruiterId: RecruiterId): Promise<Applicant[]>;
  abstract async isApplying(recruiterId: RecruiterId): Promise<boolean>;
  abstract async apply(recruiterId: RecruiterId): Promise<void>;
  abstract async cancel(recruiterId: RecruiterId): Promise<void>;
}
