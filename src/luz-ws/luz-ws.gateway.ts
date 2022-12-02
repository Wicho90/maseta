import { Logger } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';
import { LuzWsService } from './luz-ws.service';


@WebSocketGateway()
export class LuzWsGateway {
  constructor(private readonly luzWsService: LuzWsService) {}
  
  @WebSocketServer() wss: Server;
  
  private readonly logger =  new Logger(LuzWsService.name);
  

  @SubscribeMessage('findAllLuzs')
  async findAll() {
    this.sendAll();
  }

  async sendAll() {
    const luzs = await this.luzWsService.findAll();
    this.wss.emit('luzs-from-server', luzs);
  }
  

  
}
