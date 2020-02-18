import { Test, TestingModule } from "@nestjs/testing";
import { FilesController } from "./files.controller";
import { ConfigService, ConfigModule } from "@nestjs/config";
import { MulterModule } from "@nestjs/platform-express";
import * as os from "os";

describe("FilesController", () => {
  let appController: FilesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MulterModule.register({
          dest: os.tmpdir()
        }),
        ConfigModule.forRoot()
      ],
      controllers: [FilesController]
    }).compile();

    appController = app.get<FilesController>(FilesController);
  });

  describe("Get File", () => {
    it('should return "Hello World!"', async () => {
      // TODO: use the config service for global config
      // Inject a config service with a mock files dir for testing
      const response = {
        sendFile: () => {}
      };
      expect(await appController.getFile(response, "test.png")).toBe(undefined);
    });
  });
});
