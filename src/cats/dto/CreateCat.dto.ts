import { PartialType } from "@nestjs/swagger";
import { UpdateCatDto } from "./UpdateCat.dto";

export class CreateCatDto extends PartialType(UpdateCatDto) {
  name: string;
  age: number;
  breed: string;
}