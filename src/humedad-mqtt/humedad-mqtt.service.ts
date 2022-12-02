import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Humedad } from '../humedad-ws/entities/humedad.entity';
import { CreateHumedadMqttDto } from './dto/create-humedad-mqtt.dto';
import { UpdateHumedadMqttDto } from './dto/update-humedad-mqtt.dto';

@Injectable()
export class HumedadMqttService {

  constructor(
    @InjectModel( Humedad.name )
    private readonly humedadModel: Model<Humedad>

  ) {}


  async create(nivel: number) {

    const estado = this.validarHumedad(nivel);

    const createAt = new Date().getTime();

    const humedad = await this.humedadModel.create( {nivel, estado, createAt});

    return humedad;

  }
  
  validarHumedad(nivel: number) {
    if ( nivel < 250 ) {
      return 'bajo';
    }

    if ( nivel > 500) {
      return 'alto';
    }

    return 'normal';
  }
}
