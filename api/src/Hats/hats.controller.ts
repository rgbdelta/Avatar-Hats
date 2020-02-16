import { Controller, Post } from "@nestjs/common";
import { HatsService } from "./hats.service";

@Controller("hats")
export class HatsController {
  constructor(private readonly appService: HatsService) {}

  @Post()
  addHat(): string {
    return this.appService.addHat();
  }
}
