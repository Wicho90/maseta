import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      subscribeOptions: { qos: 1 },
      url: 'mqtt://test.mosquitto.org:1883'
    },
  })
  
  await app.startAllMicroservices();

  await app.listen( process.env.PORT );
  console.log(`App running on port ${ process.env.PORT }`);
  
}
bootstrap();
