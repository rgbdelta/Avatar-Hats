import { Test, TestingModule } from "@nestjs/testing";
import { HatsController } from "./hats.controller";
import { HatsService } from "./hats.service";
import { ConfigService, ConfigModule } from "@nestjs/config";
import { MulterModule } from "@nestjs/platform-express";

describe("HatsController", () => {
  let appController: HatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [MulterModule, ConfigModule.forRoot()],
      controllers: [HatsController],
      providers: [HatsService]
    }).compile();

    appController = app.get<HatsController>(HatsController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      const mockUpload = {};
      expect(appController.addHat(mockUpload)).toBe("Hello World!");
    });
  });
});
