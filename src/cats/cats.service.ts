import { 
  Injectable, NotFoundException 
} from '@nestjs/common';
import {
  Cat
} from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  selectAll(): Cat[] {
    return this.cats;
  }

  // selectOne(id: number): Cat {
  //   const cat = this.cats.find(c => c.id === id);
    
  //   if (!cat) {
  //     throw new NotFoundException(`Could not find the cat with
  //       the id: ${id}`);
  //   }

  //   return cat;
  // }

  selectByName(name: string): Cat[] {
    const cats = this.cats.filter(c => c.name === name);

    if (cats.length === 0) {
      throw new NotFoundException(`Could not find any cats 
      with the name ${name}.`)
    }
    return cats;
  }
}
