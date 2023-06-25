import { Module } from '@nestjs/common';
import { UsersService } from './application/users.service';
import { UsersController } from './api/users.controller';
import { UserRepository } from './infra/repositories/user.repository';
import { PrismaService } from './infra/prisma/prisma.service';
import { CepModule } from './infra/api-validate-cep/cep/cep.module';

@Module({
  imports: [CepModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UserRepository],
})
export class UsersModule {}
