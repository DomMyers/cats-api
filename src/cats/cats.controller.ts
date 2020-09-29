import {
  Body, 
  Controller, 
  Delete, 
  Get, 
  Param, 
  Post, 
  Put, 
} from '@nestjs/common';
import { CatsService } from './cats.service';
import {
  CreateCatDto, 
  UpdateCatDto, 
  ListAllEntitiesDto,
} from './dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService
  ) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async getAll(): Promise<Cat[]> {
    return await this.catsService.selectAll();
  }

  // @Get('id')
  // async getOne(@Param('id') id: number): Promise<Cat> {
  //   return await this.catsService.selectOne(id);
  // }

  @Get(':name')
  async getByName(@Param('name') name: string): Promise<Cat[]> {
    return await this.catsService.selectByName(name);    
  }

  @Put(':id')
  update(
    @Param('id') id: string, 
    @Body() updateCatDto: UpdateCatDto
  ){
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
