import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HRComponent }  from './hr.component';
import { EmployeeListComponent} from './employees.hr.component';

import { EmployeeOverviewComponent} from './employeeOverview.hr.component';
import { EmployeeEducationComponent} from './employeeEducation.hr.component';
import { EmployeeWorkExperienceComponent} from './employeeWorkExperience.hr.component';
import { EmployeeTrainingComponent } from './employeeTraining.hr.component';
import { EmployeeContractComponent } from './employeeContract.hr.component';
import { EmployeeSkillsComponent } from './employeeSkills.hr.component';

const hrRoutes: Routes = [
    {
        path: 'home/hr', component: HRComponent, children: [
            { path: '', redirectTo: 'employees' },
            { path: 'employees', component: EmployeeListComponent },
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'education', component: EmployeeEducationComponent },
            { path: 'workExperience', component: EmployeeWorkExperienceComponent },
            { path: 'training', component: EmployeeTrainingComponent },
            { path: 'contract', component: EmployeeContractComponent },
            { path: 'skills', component: EmployeeSkillsComponent }
        ]

    }
];

export const hrRouting: ModuleWithProviders = RouterModule.forChild(hrRoutes);