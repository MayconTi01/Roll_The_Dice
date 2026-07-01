import { PartialType } from '@nestjs/mapped-types';
import { DadoEscolhidoDto  } from './create-dado.dto';

export class UpdateDadoDto extends PartialType(DadoEscolhidoDto) {}
