import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }    from '../dashboard/dashboard.component';
import { HRComponent }  from '../hr/hr.component';
import { EmployeeListComponent} from '../hr/employees.hr.component';
import { HomeComponent} from '../home.component';
import { EmployeeOverviewComponent} from '../hr/employeeOverview.hr.component';
import { EmployeeEducationComponent} from '../hr/employeeEducation.hr.component';
import { EmployeeWorkExperienceComponent} from '../hr/employeeWorkExperience.hr.component';
import { EmployeeTrainingComponent } from '../hr/employeeTraining.hr.component';
import { EmployeeContractComponent } from '../hr/employeeContract.hr.component';
import { EmployeeSkillsComponent } from '../hr/employeeSkills.hr.component';

const homeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', component: DashboardComponent },
            {
                path: 'hr', component: HRComponent, children: [
                    { path: '', redirectTo: 'employees' },
                    { path: 'employees', component: EmployeeListComponent },
                    { path: 'overview', component: EmployeeOverviewComponent },
                    { path: 'education', component: EmployeeEducationComponent },
                    { path: 'workExperience', component: EmployeeWorkExperienceComponent },
                    { path: 'training', component: EmployeeTrainingComponent },
                    { path: 'contract', component: EmployeeContractComponent },
                    { path: 'skills', component : EmployeeSkillsComponent}
                ]
            }
        ]
    }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
