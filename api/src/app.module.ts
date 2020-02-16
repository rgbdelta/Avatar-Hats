import { Module } from "@nestjs/common";
import { HatsController } from "./Hats/hats.controller";
import { HatsService } from "./Hats/hats.service";

@Module({
  imports: [],
  controllers: [HatsController],
  providers: [HatsService]
})
export class AppModule {}
