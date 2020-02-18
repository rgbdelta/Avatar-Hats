import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody } from "@nestjs/swagger";
import { join } from "path";
import { config, IMulterFile } from "../config";
import { AddHatRequestDTO, AddHatResponseDTO } from "./hats.definitions";
import { HatsService } from "./hats.service";

@Controller("hats")
export class HatsController {
  constructor(
    private readonly configService: ConfigService,
    private readonly appService: HatsService
  ) {}

  @Get("/files/:id")
  async getFile(@Res() res, @Param("id") id: string): Promise<any> {
    res.sendFile(join(config.STATIC_FILES_DIR, id));
  }

  @Post("/")
  @UseInterceptors(FileInterceptor("file"))
  @ApiBody({
    description: "Put a hat on",
    type: AddHatRequestDTO
  })
  async addHat(@UploadedFile() file: IMulterFile): Promise<AddHatResponseDTO> {
    return await this.appService.addHat(file);
  }
}
