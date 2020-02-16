import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import * as fs from "fs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Hats API")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  fs.writeFileSync("../specs/hats.swagger.json", JSON.stringify(document));
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
