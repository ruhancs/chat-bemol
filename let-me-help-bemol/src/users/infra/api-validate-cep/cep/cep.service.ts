import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CepService {
  constructor(private readonly httpService: HttpService) {}

  async getCepInformation(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const res = await this.httpService.axiosRef.get(url).catch(() => undefined);

    if (!res) {
      throw new BadRequestException('Cep deve estar no formato xxxxxxxx');
    }

    if (res.data.erro) {
      throw new BadRequestException('Cep nao existe');
    }
    return res;
  }
}
