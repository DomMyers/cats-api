import { 
  Injectable, 
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { CreateCatDto } from './dto/CreateCat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>
  ) {}

  create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = new Cat();
    cat.name = createCatDto.name;
    cat.age = createCatDto.age;
    cat.breed = createCatDto.breed;    

    return this.catsRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: string): Promise<Cat> {
    return this.catsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.catsRepository.delete(id);
  }
}
