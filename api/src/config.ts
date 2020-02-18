// TODO: delete this all and use a config service
import * as path from "path";

export interface IMulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export const config = {
  STATIC_FILES_DIR: path.join(process.cwd(), "files"),
  STATIC_FILES_ROUTE: "files"
};
