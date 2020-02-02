import { Controller, Post, Request, Response } from '@decorators/express';
import * as Express from 'express';
import { autoInjectable } from 'tsyringe';
import { HatsService } from '../services/hatsServices';

@autoInjectable()
@Controller('/hats')
export class HatsController {
  constructor(private hatsService: HatsService) {}

  @Post('/hat')
  async putHatOn(@Request() request: Express.Request, @Response() res: Express.Response) {
    res.send(await this.hatsService.putHatOn(request));
  }
}
