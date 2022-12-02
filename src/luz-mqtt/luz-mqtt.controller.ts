import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { LuzWsGateway } from '../luz-ws/luz-ws.gateway';
import { LuzMqttService } from './luz-mqtt.service';

@Controller()
export class LuzMqttController {
  constructor(
    private readonly luzMqttService: LuzMqttService,
    private readonly luzWsGateway: LuzWsGateway
  ) {}

  @MessagePattern('luz-input')
  async create(@Payload() payload: number, @Ctx() context: MqttContext) {
    await this.luzMqttService.create(payload);
    console.log('Insercion hecha'); 
    this.luzWsGateway.sendAll();
  }
}
