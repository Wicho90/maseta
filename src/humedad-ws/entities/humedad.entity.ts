import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Humedad {
    
    //id: string // Monogo lo provee

    @Prop({
        index: true
    })
    nivel: number;

    @Prop()
    estado: string;

    @Prop({
        index: true
    })
    createAt: string;
    
}

export const HumedadSchema = SchemaFactory.createForClass( Humedad );
