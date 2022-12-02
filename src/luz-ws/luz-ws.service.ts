import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Luz } from './entities/luz.entity';


@Injectable()
export class LuzWsService {
  
  constructor(
    @InjectModel( Luz.name )
    private readonly luzModel: Model<Luz>,
  ) {}

  async findAll() {
    const luzs = await this.luzModel.find();
    return luzs;
  }

  

  


  // findOne(id: number) {
  //   return `This action returns a #${id} luzW`;
  // }

  
}
