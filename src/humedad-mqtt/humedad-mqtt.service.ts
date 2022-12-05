import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HumedadWsGateway } from 'src/humedad-ws/humedad-ws.gateway';
import { Humedad } from '../humedad-ws/entities/humedad.entity';
import { CreateHumedadMqttDto } from './dto/create-humedad-mqtt.dto';
import { UpdateHumedadMqttDto } from './dto/update-humedad-mqtt.dto';

@Injectable()
export class HumedadMqttService {

  constructor(
    @InjectModel( Humedad.name )
    private readonly humedadModel: Model<Humedad>,
    private readonly humedadWsGateway: HumedadWsGateway,

  ) {}


  async create(nivel: number) {

    const estado = this.validarHumedad(nivel);
    const date = new Date();
    const createAt = `${ date.getHours() }:${ date.getMinutes() } hrs`;

    console.log(createAt);
    
    
    const humedad = await this.humedadModel.create( {nivel, estado, createAt});
    this.humedadWsGateway.sendAll();

    return humedad;

  }
  
  validarHumedad(nivel: number) {
    if ( nivel < 250 ) {
      this.humedadWsGateway.notificar('Necesito mas agua');
      return 'bajo';
    }

    if ( nivel > 500) {
      this.humedadWsGateway.notificar('Demasiada Humedad');
      return 'alto';
    }

    return 'normal';
  }
}
