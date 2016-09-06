import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }      from './login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HRComponent } from './hr/hr.component';
import { EmployeeProfileComponent} from './hr/profile.hr.component';
import { EmployeeListComponent} from './hr/employees.hr.component';
import { EmployeeOverviewComponent} from './hr/employeeOverview.hr.component';
import { EmployeeEducationComponent} from './hr/employeeEducation.hr.component';
import { EmployeeWorkExperienceComponent} from './hr/employeeWorkExperience.hr.component';
import { EmployeeTrainingComponent} from './hr/employeeTraining.hr.component';
import { EmployeeContactComponent } from './hr/employeeContact.hr.component';
import { EmployeeSkillsComponent } from './hr/employeeSkills.hr.component';

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
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'hr', component: HRComponent, children :[
        { path: '', redirectTo: 'employees',  pathMatch : 'full'},
            { path: 'employees', component: EmployeeListComponent },
            { path: 'overview/:Id', component: EmployeeOverviewComponent },
            { path: 'education/:Id', component: EmployeeEducationComponent },
            { path: 'workExperience/:Id', component: EmployeeWorkExperienceComponent },
            { path: 'training/:Id', component: EmployeeTrainingComponent },
            { path: 'contract/:Id', component: EmployeeContactComponent },
            { path: 'skills/:Id', component: EmployeeSkillsComponent }
      ] }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
