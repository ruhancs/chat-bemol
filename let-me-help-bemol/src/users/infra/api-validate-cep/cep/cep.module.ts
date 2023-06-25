import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CepService } from './cep.service';

@Module({
  imports: [HttpModule],
  providers: [CepService],
  exports: [CepService],
})
export class CepModule {}
