import { Prop, Schema, SchemaFactory  } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Luz extends Document{
    
    //id: string // Monogo lo provee

    @Prop({
        index: true
    })
    nivel: number;
    
    @Prop({
        index: true
    })
    estado: string

    @Prop({
        index: true
    })
    createAt: string;
}


export const LuzSchema = SchemaFactory.createForClass( Luz );