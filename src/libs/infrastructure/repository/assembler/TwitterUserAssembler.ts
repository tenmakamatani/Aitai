import { TwitterUser } from "@libs/domain/model";
import { TwitterUserDTO } from "../dto/TwitterUserDTO";

export class TwitterUserAssembler {
  static decode(dto: TwitterUserDTO): TwitterUser {
    return new TwitterUser({
      name: dto.name,
      imageUrl: dto.imageUrl,
      profileUrl: dto.profileUrl,
      description: dto.description,
    });
  }
}
