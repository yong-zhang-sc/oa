"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var login_component_1 = require('./login.component');
var home_component_1 = require('./home/home.component');
var header_component_1 = require('./home/header.component');
var sidebar_component_1 = require('./home/sidebar.component');
var footer_component_1 = require('./home/footer.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var hr_component_1 = require('./hr/hr.component');
var profile_hr_component_1 = require('./hr/profile.hr.component');
var employees_hr_component_1 = require('./hr/employees.hr.component');
var employeeOverview_hr_component_1 = require('./hr/employeeOverview.hr.component');
var employeeEducation_hr_component_1 = require('./hr/employeeEducation.hr.component');
var employeeWorkExperience_hr_component_1 = require('./hr/employeeWorkExperience.hr.component');
var employeeTraining_hr_component_1 = require('./hr/employeeTraining.hr.component');
var employeeContact_hr_component_1 = require('./hr/employeeContact.hr.component');
var employeeSkills_hr_component_1 = require('./hr/employeeSkills.hr.component');
var employeeOverview_edit_hr_component_1 = require('./hr/employeeOverview.edit.hr.component');
var filterByKeyword_pipe_1 = require('./hr/filterByKeyword.pipe');
// import {HRModule} from './hr/hr.module';
var app_routing_1 = require('./app.routing');
var communication_service_1 = require('./communication.service');
var login_service_1 = require('./login.service');
var employee_service_1 = require('./hr/employee.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule],
            declarations: [app_component_1.AppComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                footer_component_1.FooterComponent,
                dashboard_component_1.DashboardComponent,
                hr_component_1.HRComponent,
                profile_hr_component_1.EmployeeProfileComponent,
                employees_hr_component_1.EmployeeListComponent,
                employeeOverview_hr_component_1.EmployeeOverviewComponent,
                employeeEducation_hr_component_1.EmployeeEducationComponent,
                employeeWorkExperience_hr_component_1.EmployeeWorkExperienceComponent,
                employeeTraining_hr_component_1.EmployeeTrainingComponent,
                employeeContact_hr_component_1.EmployeeContactComponent,
                employeeSkills_hr_component_1.EmployeeSkillsComponent,
                employeeOverview_edit_hr_component_1.EmployeeOverviewEditComponent,
                filterByKeyword_pipe_1.FilterByKeywordsPipe
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [login_service_1.LoginService, employee_service_1.EmployeeService, communication_service_1.CommunicationService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map