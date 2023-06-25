import { Module } from '@nestjs/common';
import { WsGateway } from './gateway.controller';

@Module({
  providers: [WsGateway],
})
export class WsGatewayModule {}
