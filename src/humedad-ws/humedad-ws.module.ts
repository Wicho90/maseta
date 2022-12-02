import { Module } from '@nestjs/common';
import { HumedadWsService } from './humedad-ws.service';
import { HumedadWsGateway } from './humedad-ws.gateway';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Humedad, HumedadSchema } from './entities/humedad.entity';

@Module({
  providers: [HumedadWsGateway, HumedadWsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Humedad.name,
        schema: HumedadSchema
      }
    ]),
  ],
  exports: [ HumedadWsGateway, MongooseModule ]
})
export class HumedadWsModule {}
