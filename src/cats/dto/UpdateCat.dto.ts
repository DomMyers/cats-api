import { Cat } from '../interfaces/cat.interface';

export class UpdateCatDto implements Cat {
    id: number;
    name: string;
    age: number;
    breed: string;
  }