import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component'
import { UsageComponent } from './usage/usage.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { ServicesComponent } from './services/services.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: ClientsComponent,
    path: 'client'
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    component: LoginFormComponent,
    path: 'login'
  },
  {
    component: ServicesComponent,
    path: 'service'
  },
  {
    component: UsageComponent,
    path: 'usage'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
