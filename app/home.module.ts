import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { HomeComponent} from './home.component';
import { HeaderComponent }    from './home/header.component';
import { SidebarComponent }  from './home/sidebar.component';
import { FooterComponent} from './home/footer.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { HRComponent} from './hr/hr.component';
import { EmployeeProfileComponent} from './hr/profile.hr.component';
import { EmployeeListComponent} from './hr/employees.hr.component';
import { EmployeeOverviewComponent} from './hr/employeeOverview.hr.component';
import { EmployeeEducationComponent} from './hr/employeeEducation.hr.component';
import { EmployeeWorkExperienceComponent} from './hr/employeeWorkExperience.hr.component';
import { EmployeeTrainingComponent} from './hr/employeeTraining.hr.component';
import { EmployeeContractComponent } from './hr/employeeContract.hr.component';
import { EmployeeSkillsComponent } from './hr/employeeSkills.hr.component';


// import { }
// import { HeroService } from './hero.service';
import { homeRouting } from './home/home.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    homeRouting
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
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
  providers: [

  ]
})
export class HomeModule { }
