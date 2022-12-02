import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { RegresionWsService } from './regresion-ws.service';

@WebSocketGateway()
export class RegresionWsGateway {
  constructor(private readonly regresionWsService: RegresionWsService) {}

  @WebSocketServer() wss: Server;

  @SubscribeMessage('findRegression')
  async regression () {
    const regresion = await this.regresionWsService.findAll();

    this.wss.emit('regresion-from-server', regresion);
  }
}
