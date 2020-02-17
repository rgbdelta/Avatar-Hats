import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody } from "@nestjs/swagger";
import { AddHatRequestDTO } from "./hats.definitions";
import { HatsService } from "./hats.service";
import { ConfigService } from "@nestjs/config";

@Controller("hats")
export class HatsController {
  constructor(
    private readonly configService: ConfigService,
    private readonly appService: HatsService
  ) {}

  @Post("/")
  @UseInterceptors(FileInterceptor("file"))
  @ApiBody({
    description: "Put a hat on",
    type: AddHatRequestDTO
  })
  addHat(@UploadedFile() file): string {
    return this.appService.addHat(file);
  }
}
