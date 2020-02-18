import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { HatsController } from "./hats.controller";
import { HatsService } from "./hats.service";
import * as fs from "fs";
import { IMulterFile } from "../config";

describe("HatsController", () => {
  let appController: HatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      controllers: [HatsController],
      providers: [HatsService]
    }).compile();

    appController = app.get<HatsController>(HatsController);
  });

  describe("Add Hat", () => {
    it("should return a file id", async () => {
      const file: IMulterFile = {
        fieldname: "file",
        originalname: "test.png",
        encoding: "7bit",
        mimetype: "image/png",
        destination: "test.png",
        filename: "test.png",
        path: "test.png",
        size: 2
      };
      expect(await appController.addHat(file)).toStrictEqual({
        fileId: "test.png-test.png"
      });
    });
  });
});
