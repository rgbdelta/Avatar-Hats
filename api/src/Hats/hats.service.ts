import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";
import { AddHatResponseDTO } from "./hats.definitions";
import { IMulterFile, config } from "../config";

@Injectable()
export class HatsService {
  async addHat(file: IMulterFile): Promise<AddHatResponseDTO> {
    const outputFilePath = `${file.filename}-${file.originalname}`;
    const destination = path.join(config.STATIC_FILES_DIR, outputFilePath);
    await fs.copyFile(file.path, destination, () => {});
    return {
      fileId: outputFilePath
    };
  }
}
