import { injectable } from 'inversify';
import axios, { AxiosResponse } from 'axios';
import { TwitterUser } from '@libs/domain/model';
import { TwitterUserRepository, IRetrieveTwitterUserRequest, IRetrieveTwitterUserResponse } from '@libs/domain/repository';
import { TwitterUserDTO } from './dto/TwitterUserDTO';
import { TwitterUserAssembler } from './assembler/TwitterUserAssembler';

@injectable()
export class AxiosTwitterUserRepository extends TwitterUserRepository {
  
  async retrieve(req: IRetrieveTwitterUserRequest): Promise<TwitterUser> {
    const result = await axios.get<IRetrieveTwitterUserRequest, AxiosResponse<IRetrieveTwitterUserResponse>>('/api/twitter/account_info', {
      data: req
    });
    const dto = TwitterUserDTO.fromRes(result);
    return TwitterUserAssembler.decode(dto);
  }

}
