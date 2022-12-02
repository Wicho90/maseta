import { Module } from '@nestjs/common';
import { HumedadMqttService } from './humedad-mqtt.service';
import { HumedadMqttController } from './humedad-mqtt.controller';
import { HumedadWsModule } from '../humedad-ws/humedad-ws.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [HumedadMqttController],
  providers: [HumedadMqttService],
  imports: [HumedadWsModule],
  exports: []
})
export class HumedadMqttModule {}
