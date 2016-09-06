import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent} from './home/header.component';
import { SidebarComponent} from './home/sidebar.component';
import { FooterComponent} from './home/footer.component';
import { DashboardComponent} from './dashboard/dashboard.component';



import { HRComponent } from './hr/hr.component';
import { EmployeeProfileComponent} from './hr/profile.hr.component';
import { EmployeeListComponent} from './hr/employees.hr.component';
import { EmployeeOverviewComponent} from './hr/employeeOverview.hr.component';
import { EmployeeEducationComponent} from './hr/employeeEducation.hr.component';
import { EmployeeWorkExperienceComponent} from './hr/employeeWorkExperience.hr.component';
import { EmployeeTrainingComponent} from './hr/employeeTraining.hr.component';
import { EmployeeContactComponent } from './hr/employeeContact.hr.component';
import { EmployeeSkillsComponent } from './hr/employeeSkills.hr.component';
import { EmployeeOverviewEditComponent } from './hr/employeeOverview.edit.hr.component';

import { FilterByKeywordsPipe } from './hr/filterByKeyword.pipe';


// import {HRModule} from './hr/hr.module';

import { routing } from './app.routing';

import { CommunicationService } from './communication.service';
import {LoginService} from './login.service';
import {EmployeeService } from './hr/employee.service';

@NgModule({
  imports: [BrowserModule, routing, HttpModule],
  declarations: [AppComponent,
    LoginComponent,
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
    EmployeeContactComponent,
    EmployeeSkillsComponent,
    EmployeeOverviewEditComponent,
    FilterByKeywordsPipe
  ],
  bootstrap: [AppComponent],
  providers: [LoginService,EmployeeService,CommunicationService]
})
export class AppModule { }
