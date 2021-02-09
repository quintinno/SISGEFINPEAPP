import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtividadeComponent } from './atividade.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ AtividadeComponent ],
  imports: [
    CommonModule,
	RouterModule.forChild([{path: "", component: AtividadeComponent}])
  ]
})
export class AtividadeModule { }
