import { PartialType } from '@nestjs/mapped-types';
import { CreateHumedadMqttDto } from './create-humedad-mqtt.dto';

export class UpdateHumedadMqttDto extends PartialType(CreateHumedadMqttDto) {
  id: number;
}
