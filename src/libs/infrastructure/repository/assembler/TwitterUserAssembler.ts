import { TwitterUser } from "@libs/domain/model";
import { TwitterUserDTO } from "../dto/TwitterUserDTO";

export class TwitterUserAssembler {
  static decode(dto: TwitterUserDTO): TwitterUser {
    return new TwitterUser({
      id: dto.id,
      name: dto.name,
      imageUrl: dto.imageUrl,
      description: dto.description,
    });
  }
}
