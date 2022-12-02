import { Inject } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { HumedadWsService } from './humedad-ws.service';

@WebSocketGateway()
export class HumedadWsGateway {
  constructor(
    private readonly humedadWsService: HumedadWsService,
  ) {}

  @WebSocketServer() wss: Server;


  @SubscribeMessage('findAllHumedads')
  async findAll() {
    const humedads = await this.humedadWsService.findAll();
    this.wss.emit('humedads-from-server', humedads);
  }
  

  async sendAll() {
    const humedads = await this.humedadWsService.findAll();
    this.wss.emit('humedads-from-server', humedads);
    console.log('Se mando');
    
  }


  @MessagePattern('humedad-input')
  create(@Payload() payload: number, @Ctx() context: MqttContext) {
    console.log('From ws,', payload);
     /// This is the websockets controller
  }


}
