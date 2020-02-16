import { Test, TestingModule } from "@nestjs/testing";
import { HatsController } from "./hats.controller";
import { HatsService } from "./hats.service";

describe("HatsController", () => {
  let appController: HatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HatsController],
      providers: [HatsService]
    }).compile();

    appController = app.get<HatsController>(HatsController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(appController.addHat()).toBe("Hello World!");
    });
  });
});
