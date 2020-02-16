import { Injectable } from "@nestjs/common";

@Injectable()
export class HatsService {
  addHat(): string {
    return "Hello World!";
  }
}
