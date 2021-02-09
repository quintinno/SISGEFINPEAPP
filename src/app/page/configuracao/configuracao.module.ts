import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracaoComponent } from './configuracao.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ ConfiguracaoComponent ],
  imports: [
    CommonModule,
	RouterModule.forChild([{path: "", component: ConfiguracaoComponent}])
  ]
})
export class ConfiguracaoModule { }
