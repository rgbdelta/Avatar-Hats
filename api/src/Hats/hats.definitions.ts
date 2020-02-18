import { ApiProperty } from "@nestjs/swagger";

export class AddHatRequestDTO {
  @ApiProperty({ type: "string", format: "binary" })
  file: any;
}

export class AddHatResponseDTO {
  fileId: string;
}
