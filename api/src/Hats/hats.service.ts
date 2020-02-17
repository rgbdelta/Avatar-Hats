import { Injectable } from "@nestjs/common";

@Injectable()
export class HatsService {
  addHat(file: any): string {
    return "Hello World!";
  }
}
