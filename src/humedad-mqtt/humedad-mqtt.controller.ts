import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { HumedadWsGateway } from '../humedad-ws/humedad-ws.gateway';
import { HumedadMqttService } from './humedad-mqtt.service';


@Controller()
export class HumedadMqttController {
  constructor(
    private readonly humedadMqttService: HumedadMqttService,
    private readonly humedadWsGateway: HumedadWsGateway
  ) {}

  @MessagePattern('humedad-input')
  async create(@Payload() payload: number, @Ctx() context: MqttContext) {
    await this.humedadMqttService.create(payload);
    console.log('created');
    this.humedadWsGateway.sendAll();
  }

  
}
