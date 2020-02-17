import { Module, Inject } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { HatsController } from "./Hats/hats.controller";
import { HatsService } from "./Hats/hats.service";
import { diskStorage } from "multer";
import { ConfigModule, ConfigService } from "@nestjs/config";

MulterModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async () => ({
    storage: diskStorage({
      destination: "upload-temp",
      filename: (req, file, cb) => {
        return cb(null, file.originalname);
      }
    })
  })
});

@Module({
  imports: [MulterModule, ConfigModule.forRoot()],
  controllers: [HatsController],
  providers: [HatsService]
})
export class AppModule {}
