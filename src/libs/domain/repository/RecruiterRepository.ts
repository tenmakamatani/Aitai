import { injectable } from 'inversify';
import { Recruiter, RecruiterId } from '../model';

@injectable()
export abstract class RecruiterRepository {
  abstract createMyRecruiter(recruiter: Recruiter): Promise<void>;
  abstract retrieve(recruiterId: RecruiterId): Promise<Recruiter>;
  abstract retrieveFromTwitterId(twitterId: string): Promise<Recruiter>;
}
