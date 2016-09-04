import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }      from './login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { HomeModule } from './home.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path : '', redirectTo : 'dashboard', pathMatch : 'full'},
      {path : 'dashboard', component : DashboardComponent}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
