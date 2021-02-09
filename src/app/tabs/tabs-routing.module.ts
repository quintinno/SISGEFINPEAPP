import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'monitoramento',
        loadChildren: () => import('../page/monitoramento/monitoramento.module').then(m => m.MonitoramentoModule)
      },
      {
        path: 'atividade',
        loadChildren: () => import('../page/atividade/atividade.module').then(m => m.AtividadeModule)
      },
      {
        path: 'despesa',
        loadChildren: () => import('../page/despesa/despesa.module').then(m => m.DespesaModule)
      },
      {
        path: 'configuracao',
        loadChildren: () => import('../page/configuracao/configuracao.module').then(m => m.ConfiguracaoModule)
      },
      {
        path: 'monitoramento',
        redirectTo: '/tabs/monitoramento',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/monitoramento',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
