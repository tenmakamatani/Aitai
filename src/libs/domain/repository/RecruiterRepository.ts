import { Recruiter, RecruiterId } from '../model';

export abstract class RecruiterRepository {
  abstract async create(recruiter: Recruiter): Promise<void>;
  abstract async retrieve(recruiterId: RecruiterId): Promise<Recruiter>;
}
