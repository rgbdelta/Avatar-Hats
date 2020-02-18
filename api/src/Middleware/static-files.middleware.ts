import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
import { join } from "path";
import { config } from "../config";

@Injectable()
export class StaticFilesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const filename = req.path.replace(`/${config.STATIC_FILES_ROUTE}/`, "");
    res.sendFile(join(config.STATIC_FILES_DIR, filename));
  }
}
