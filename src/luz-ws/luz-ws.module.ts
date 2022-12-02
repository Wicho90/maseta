import { Module } from '@nestjs/common';
import { LuzWsService } from './luz-ws.service';
import { LuzWsGateway } from './luz-ws.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Luz, LuzSchema } from './entities/luz.entity';

@Module({
  providers: [LuzWsGateway, LuzWsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Luz.name,
        schema: LuzSchema
      }
    ]),
  ],
  exports: [ LuzWsGateway, MongooseModule ]
})
export class LuzWsModule {}
