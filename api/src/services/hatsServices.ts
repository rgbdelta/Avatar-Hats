import { HatRequestDTO, HatResponseDTO } from '../../codegen/build/hats.yaml-sdk/models/index';

export class HatsService {
  putHatOn(req: HatRequestDTO): HatResponseDTO {
    return { imageUrl: 'test' };
  }
}
