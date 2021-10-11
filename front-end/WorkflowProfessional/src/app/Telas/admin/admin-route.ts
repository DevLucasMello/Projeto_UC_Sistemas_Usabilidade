import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CadastroAdminComponent } from './cadastro-admin/cadastro-admin.component';
import { VagasAdminComponent } from './vagas-admin/vagas-admin.component';
import { CadastrarVagaAdminComponent } from './vagas-admin/cadastrar-vaga-admin/cadastrar-vaga-admin.component';
import { AdminComponent } from './admin.component';

const adminRouterConfig: Routes = [
  {
    path: '', component: AdminComponent,
    children: [

      { path: '', component: DashboardAdminComponent },

      { path: 'home', component: DashboardAdminComponent },

      { path: 'cadastro', component: CadastroAdminComponent },

      { path: 'vagas', component: VagasAdminComponent }    
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRouterConfig)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }