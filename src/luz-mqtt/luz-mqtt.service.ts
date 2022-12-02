import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Luz } from '../luz-ws/entities/luz.entity';

@Injectable()
export class LuzMqttService {

    constructor(
        @InjectModel( Luz.name )
        private readonly luzModel: Model<Luz>
    ) {}
    

    async create(dato: number) {
        let error = 'correcto';
        const createAt = new Date().getTime();
        if (this.validarAnomalias(dato)) error = 'anomalia';  
        const luz = await this.luzModel.create({dato, error, createAt});
    
        return luz;
    
    }

    validarAnomalias(dato: number): Boolean{
        return dato < 0 || dato > 399;
      }



}
