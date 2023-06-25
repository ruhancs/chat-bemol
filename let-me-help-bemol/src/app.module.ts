import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { WsGatewayModule } from './ws-gateway/ws-gateway.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, WsGatewayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
