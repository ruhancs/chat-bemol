import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';
import { UserRepository } from '../infra/repositories/user.repository';
import { UserEntity } from '../domain/entities/user.entity';
import { CepService } from '../infra/api-validate-cep/cep/cep.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cepService: CepService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { data } = await this.cepService.getCepInformation(createUserDto.cep);
    const uf = data.uf;
    if (uf !== 'AM') {
      throw new BadRequestException(
        'Cep deve ser de um endereco no estado Amazonas',
      );
    }
    return this.userRepository.createUser(createUserDto);
  }

  async findAll(): Promise<UserEntity[]> {
    //const { data } = await this.cepService.getCepInformation('69099050');
    return this.userRepository.findAllUser();
  }

  findOne(id: number) {
    return this.userRepository.findUserById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.updateUser(id, updateUserDto);
  }
}
