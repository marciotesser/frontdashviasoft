import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashStatusAtualResolver } from './dashboard/dash-status-atual/dash-status-atual.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      servicosStatusAtuais: DashStatusAtualResolver
    },
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
