import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Humedad } from '../humedad-ws/entities/humedad.entity';
import { Luz } from '../luz-ws/entities/luz.entity';

@Injectable()
export class RegresionWsService {
    
    constructor(
        @InjectModel( Humedad.name )
        private readonly humedadModel: Model<Humedad>,

        @InjectModel( Luz.name )
        private readonly luzModel: Model<Luz>,
    ) {}

    async findAll() {

        const x = (await this.humedadModel.find().sort({_id:-1}).limit(16)).map( humedad => humedad.nivel );
        
        const y = (await this.luzModel.find().sort({_id:-1}).limit(16)).map( luz => luz.dato);
        

        // const original: DataPoint[] = x.map( (_punto, i) => [x[i], y[i]]);
        
        // const sr = linear(original);

        // const regression = this.predictY(x, y, sr);


        
        // return {
        //     original,
        //     regression
        // };

        
    }


    private predictY(x, y, sr) {
        const yc = [];
        
        for (let i = 0; i < y.length; i++) {
            yc[i] = sr.predict(x[i]);
            
        }
        return yc;
    }

}
