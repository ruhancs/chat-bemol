import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { UsersService } from '../application/users.service';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
}
