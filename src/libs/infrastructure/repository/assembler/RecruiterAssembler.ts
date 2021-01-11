import { Recruiter } from "@libs/domain/model";
import { RecruiterDTO } from "../dto/RecruiterDTO";

export class RecruiterAssembler {
  static decode(dto: RecruiterDTO): Recruiter {
    return new Recruiter({
      id: dto.id,
      name: dto.name,
      description: dto.description,
      imageUrl: dto.imageUrl,
      twitterId: dto.twitterId,
    });
  }

  static encode(recruiter: Recruiter): RecruiterDTO {
    return new RecruiterDTO({
      id: recruiter.id?.value,
      name: recruiter.name,
      description: recruiter.description,
      imageUrl: recruiter.imageUrl,
      twitterId: recruiter.twitterId
    });
  }
}
