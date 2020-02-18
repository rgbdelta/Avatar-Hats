import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MulterModule } from "@nestjs/platform-express";
import * as os from "os";
import { HatsController } from "./Hats/hats.controller";
import { HatsService } from "./Hats/hats.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MulterModule.register({
      dest: os.tmpdir()
    })
  ],
  controllers: [HatsController],
  providers: [HatsService]
})
export class AppModule {
  // TODO: use the FilesController to return a url to a file using the middleware
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(StaticFilesMiddleware).forRoutes({
  //     path: `${config.STATIC_FILES_ROUTE}/*`,
  //     method: RequestMethod.GET
  //   });
  // }
}
