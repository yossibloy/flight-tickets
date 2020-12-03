import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderingDto } from './create-ordering.dto';

export class UpdateOrderingDto extends PartialType(CreateOrderingDto) {}
