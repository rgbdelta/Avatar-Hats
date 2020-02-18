import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as fs from "fs";
import * as path from "path";
import { AppModule } from "./app.module";
import { config } from "./config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  // Generate Swagger spec
  const options = new DocumentBuilder()
    .setTitle("Hats API")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const documentDestination = path.join("..", "specs", "hats.swagger.json");
  await fs.writeFile(documentDestination, JSON.stringify(document), () => {});

  // Host Swagger docs
  SwaggerModule.setup("api", app, document);

  // Create static file dirs
  await fs.mkdir(config.STATIC_FILES_DIR, () => {});

  // Start server
  await app.listen(port);
}
bootstrap();
