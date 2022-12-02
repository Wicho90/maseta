import { Module } from '@nestjs/common';
import { LuzMqttService } from './luz-mqtt.service';
import { LuzMqttController } from './luz-mqtt.controller';
import { LuzWsModule } from '../luz-ws/luz-ws.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Luz, LuzSchema } from '../luz-ws/entities/luz.entity';

@Module({
  controllers: [LuzMqttController],
  providers: [LuzMqttService],
  imports: [ LuzWsModule ],
  exports: []
})
export class LuzMqttModule {}
