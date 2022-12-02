import { Module } from '@nestjs/common';
import { RegresionWsService } from './regresion-ws.service';
import { RegresionWsGateway } from './regresion-ws.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { HumedadWsModule } from 'src/humedad-ws/humedad-ws.module';
import { LuzWsModule } from 'src/luz-ws/luz-ws.module';

@Module({
  providers: [RegresionWsGateway, RegresionWsService],
  imports: [ HumedadWsModule, LuzWsModule ]
})
export class RegresionWsModule {}
