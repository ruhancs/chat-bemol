import { OnModuleInit } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(0, {
  cors: {
    origin: ['http://localhost:8000'],
  },
  namespace: 'room',
})
export class WsGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  private users = {};

  onModuleInit() {
    this.server.on('connection', () => {
      console.log('client connected');
    });
  }

  @SubscribeMessage('join')
  joinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: { name: string; room: string },
  ) {
    const { name, room } = body;
    this.users[client.id] = { name, room };
    client.join(room);
    client.broadcast.to(room).emit('msgToClient', {
      name: body.name,
      msg: `${body.name} entrou no chat`,
    });
  }

  @SubscribeMessage('msgToSever')
  onNewMessage(@ConnectedSocket() client: Socket, @MessageBody() body: any) {
    console.log(body);
    client.broadcast.emit('msgToClient', body);
  }
}
