import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }      from './login.component';
import { HomeModule } from './home.module';

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
  // ,
  // {
  //   path: 'home',
  //   component: HomeModule
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
