import { Applicant, ApplicantId } from '@libs/domain/model';
import { ApplicantDTO } from '../dto/ApplicantDTO';

export class ApplicantAssembler {
  static decode(dto: ApplicantDTO): Applicant {
    return new Applicant({
      id: new ApplicantId(dto.id!),
      name: dto.name,
      imageUrl: dto.imageUrl,
      twitterUrl: dto.twitterUrl,
    });
  }

  static encode(applicant: Applicant): ApplicantDTO {
    return new ApplicantDTO({
      id: applicant.id?.value,
      name: applicant.name,
      imageUrl: applicant.imageUrl,
      twitterUrl: applicant.twitterUrl,
    });
  }
}
