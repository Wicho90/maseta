import { Prop, Schema, SchemaFactory  } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Luz extends Document{
    
    //id: string // Monogo lo provee

    @Prop({
        index: true
    })
    dato: number;
    
    @Prop({
        index: true
    })
    error: string

    @Prop({
        index: true
    })
    createAt: Date;
}


export const LuzSchema = SchemaFactory.createForClass( Luz );