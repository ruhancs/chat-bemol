import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from 'src/users/domain/dto/create-user.dto';
import { UserEntity } from 'src/users/domain/entities/user.entity';
import { UpdateUserDto } from 'src/users/domain/dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly dbContext: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.dbContext.user.create({
      data: createUserDto,
    });
  }

  async findAllUser(): Promise<UserEntity[]> {
    return this.dbContext.user.findMany();
  }

  async findUserById(id: number): Promise<UserEntity> {
    return this.dbContext.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    return this.dbContext.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.dbContext.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });
  }
}
