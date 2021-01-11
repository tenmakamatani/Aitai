import { injectable } from 'inversify';
import { Applicant, RecruiterId } from "../model";

@injectable()
export abstract class ApplicantRepository {
  abstract retrieve(recruiterId: RecruiterId): Promise<Applicant[]>;
  abstract isApplying(recruiterId: RecruiterId): Promise<boolean>;
  abstract apply(recruiterId: RecruiterId): Promise<void>;
  abstract cancel(recruiterId: RecruiterId): Promise<void>;
}
