import { Recruiter, RecruiterId } from "@libs/domain/model";
import { RecruiterDTO } from "../dto/RecruiterDTO";

export class RecruiterAssembler {
  static decode(dto: RecruiterDTO): Recruiter {
    return new Recruiter({
      id: new RecruiterId(dto.id!),
      name: dto.name,
      profile: dto.profile,
      message: dto.message,
      imageUrl: dto.imageUrl,
      twitterUrl: dto.twitterUrl,
    });
  }
  
  static encode(recruiter: Recruiter): RecruiterDTO {
    return new RecruiterDTO({
      id: recruiter.id?.value,
      name: recruiter.name,
      profile: recruiter.profile,
      message: recruiter.message,
      imageUrl: recruiter.imageUrl,
      twitterUrl: recruiter.twitterUrl
    });
  }
}
