import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { HRComponent} from './hr.component';
import { EmployeeProfileComponent} from './profile.hr.component';
import { EmployeeListComponent} from './employees.hr.component';
import { EmployeeOverviewComponent} from './employeeOverview.hr.component';
import { EmployeeEducationComponent} from './employeeEducation.hr.component';
import { EmployeeWorkExperienceComponent} from './employeeWorkExperience.hr.component';
import { EmployeeTrainingComponent} from './employeeTraining.hr.component';
import { EmployeeContractComponent } from './employeeContract.hr.component';
import { EmployeeSkillsComponent } from './employeeSkills.hr.component';
// import { hrRouting } from './hr.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
        // hrRouting
    ],
    declarations: [
        HRComponent,
        EmployeeProfileComponent,
        EmployeeListComponent,
        EmployeeOverviewComponent,
        EmployeeEducationComponent,
        EmployeeWorkExperienceComponent,
        EmployeeTrainingComponent,
        EmployeeContractComponent,
        EmployeeSkillsComponent
    ],
    exports: [
        HRComponent
    ],
    providers: [

    ]
})
export class HRModule { }