import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DespesaComponent } from './despesa.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [DespesaComponent],
  imports: [
    CommonModule,
	IonicModule,
	RouterModule.forChild([{path: "", component: DespesaComponent}])
  ]
})
export class DespesaModule { }
