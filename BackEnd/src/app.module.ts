import { Module } from '@nestjs/common';
import { DadosModule } from './dados/dados.module';

@Module({
  imports: [DadosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
