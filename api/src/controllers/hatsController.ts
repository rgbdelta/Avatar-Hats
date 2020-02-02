import { Controller, Post } from '@tsed/common';
import Express from 'express';
import { HatsService } from '../services/hatsServices';

@Controller('/hats')
export class HatsController {
  constructor(private hatsService: HatsService) {}

  @Post('/hat')
  async putHatOn(request: Express.Request, res: Express.Response) {
    return await this.hatsService.putHatOn(request);
  }
}
