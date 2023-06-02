import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfPipe} from './pipe/cpf.pipe';
import { TelefonePipePipe } from './pipe/telefone-pipe.pipe';



@NgModule({
  declarations: [CpfPipe, TelefonePipePipe],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    TelefonePipePipe
  ]
})
export class PipesModule { }
