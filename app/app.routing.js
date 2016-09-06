"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var home_component_1 = require('./home/home.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var hr_component_1 = require('./hr/hr.component');
var employees_hr_component_1 = require('./hr/employees.hr.component');
var employeeOverview_hr_component_1 = require('./hr/employeeOverview.hr.component');
var employeeEducation_hr_component_1 = require('./hr/employeeEducation.hr.component');
var employeeWorkExperience_hr_component_1 = require('./hr/employeeWorkExperience.hr.component');
var employeeTraining_hr_component_1 = require('./hr/employeeTraining.hr.component');
var employeeContact_hr_component_1 = require('./hr/employeeContact.hr.component');
var employeeSkills_hr_component_1 = require('./hr/employeeSkills.hr.component');
// import { HomeModule } from './home.module';
var appRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
            { path: 'hr', component: hr_component_1.HRComponent, children: [
                    { path: '', redirectTo: 'employees', pathMatch: 'full' },
                    { path: 'employees', component: employees_hr_component_1.EmployeeListComponent },
                    { path: 'overview/:Id', component: employeeOverview_hr_component_1.EmployeeOverviewComponent },
                    { path: 'education/:Id', component: employeeEducation_hr_component_1.EmployeeEducationComponent },
                    { path: 'workExperience/:Id', component: employeeWorkExperience_hr_component_1.EmployeeWorkExperienceComponent },
                    { path: 'training/:Id', component: employeeTraining_hr_component_1.EmployeeTrainingComponent },
                    { path: 'contract/:Id', component: employeeContact_hr_component_1.EmployeeContactComponent },
                    { path: 'skills/:Id', component: employeeSkills_hr_component_1.EmployeeSkillsComponent }
                ] }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map