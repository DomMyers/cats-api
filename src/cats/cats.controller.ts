import {
  Body, 
  Controller, 
  Delete, 
  Get, 
  Param, 
  Post, 
  Put, 
  Query,
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
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get()
  findAllByQuery(@Query() {limit}: ListAllEntitiesDto) {
    return `This action returns all cats (limit: ${limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //return await this.catsService.getOne(+id);
    return 'This action returns cat ' + id;
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
