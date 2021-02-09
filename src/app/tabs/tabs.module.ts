import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { MonitoramentoModule } from '../page/monitoramento/monitoramento.module';
import { AtividadeModule } from '../page/atividade/atividade.module';
import { DespesaModule } from '../page/despesa/despesa.module';
import { ConfiguracaoModule } from '../page/configuracao/configuracao.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
	MonitoramentoModule,
	AtividadeModule,
	DespesaModule,
	ConfiguracaoModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
