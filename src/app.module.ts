import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HumedadWsModule } from './humedad-ws/humedad-ws.module';
import { LuzWsModule } from './luz-ws/luz-ws.module';
import { HumedadMqttModule } from './humedad-mqtt/humedad-mqtt.module';
import { LuzMqttModule } from './luz-mqtt/luz-mqtt.module';
import { RegresionWsModule } from './regresion-ws/regresion-ws.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema,
    }),
    MongooseModule.forRoot( process.env.MONGODB ),
    HumedadWsModule,
    LuzWsModule,
    HumedadMqttModule,
    LuzMqttModule, 
    RegresionWsModule
  ]  
  
})
export class AppModule {}
