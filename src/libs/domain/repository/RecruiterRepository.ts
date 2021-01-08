import { injectable } from 'inversify';
import { Recruiter, RecruiterId } from '../model';

@injectable()
export abstract class RecruiterRepository {
  abstract async createMyRecruiter(recruiter: Recruiter): Promise<void>;
  abstract async retrieve(recruiterId: RecruiterId): Promise<Recruiter>;
}
