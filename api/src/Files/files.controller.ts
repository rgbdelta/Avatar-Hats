import { Controller, Get, Param, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { join } from "path";
import { config } from "../config";

@Controller("files")
export class FilesController {
  constructor(private readonly configService: ConfigService) {}

  // TODO: Stop using @res in controller, use the middleware and just return a url insead of blob
  @Get(":id")
  async getFile(@Res() res, @Param("id") id: string): Promise<any> {
    res.sendFile(join(config.STATIC_FILES_DIR, id));
  }
}
