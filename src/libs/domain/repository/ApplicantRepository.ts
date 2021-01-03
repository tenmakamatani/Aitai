import { Applicant, RecruiterId } from "../model";

export abstract class ApplicantRepository {
  abstract async retrieve(recruiterId: RecruiterId): Promise<Applicant[]>;
  abstract async isApplying(recruiterId: RecruiterId): Promise<boolean>;
  abstract async cancel(recruiterId: RecruiterId): Promise<void>;
}
