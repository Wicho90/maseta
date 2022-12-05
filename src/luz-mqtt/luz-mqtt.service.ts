import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LuzWsGateway } from 'src/luz-ws/luz-ws.gateway';
import { Luz } from '../luz-ws/entities/luz.entity';

@Injectable()
export class LuzMqttService {

    constructor(
        @InjectModel( Luz.name )
        private readonly luzModel: Model<Luz>,
        private readonly luzWsGateway: LuzWsGateway
    ) {}
    

    async create(nivel: number) {
        const estado = this.getEstado(nivel);
        const date = new Date();
        const createAt = `${ date.getHours() }:${ date.getMinutes() } hrs`;

        const luz = await this.luzModel.create({nivel, estado, createAt});
        this.luzWsGateway.sendAll();
        
        return luz;
    
    }

    getEstado(nivel: number): string{
        
        if ( nivel < 150) {
            this.luzWsGateway.notificar('Necesito mas Luz');
            return 'bajo'
        }
        if ( nivel > 500) {
            this.luzWsGateway.notificar('Necesito Sombra');
            return 'alto'
        }
        return 'normal';
      }



}
