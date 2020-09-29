import { Controller, Delete, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
    ) {}

    @Get()
    async findAll(): Promise<User[]> {
      return await this.usersService.findAll();      
    }

    @Get()
    async findOne() {

    }

    @Delete()
    async remove() {}
}
