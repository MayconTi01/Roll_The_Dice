import { Injectable } from '@nestjs/common';
import { DadoEscolhidoDto} from './dto/create-dado.dto';
import { UpdateDadoDto } from './dto/update-dado.dto';

@Injectable()
export class DadosService {

  RolarDados(){ 

     return console.log("Ola mundo")
    // Recebe "D20"
  // Valida se é permitido
  // Descobre que possui 20 lados
  // Gera um número entre 1 e 20
  // Retorna o resultado
}




  // create(createDadoDto: CreateDadoDto) {
  //   return 'This action adds a new dado';
  // }

  // findAll() {
  //   return `This action returns all dados`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} dado`;
  // }

  // update(id: number, updateDadoDto: UpdateDadoDto) {
  //   return `This action updates a #${id} dado`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dado`;
  // }
}

// Recebe "D20"
// Valida se é permitido
// Descobre que possui 20 lados
// Gera um número entre 1 e 20
// Retorna o resultado

// ↓