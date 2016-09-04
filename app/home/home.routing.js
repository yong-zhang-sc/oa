"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../dashboard/dashboard.component');
var hr_component_1 = require('../hr/hr.component');
var employees_hr_component_1 = require('../hr/employees.hr.component');
var home_component_1 = require('../home.component');
var employeeOverview_hr_component_1 = require('../hr/employeeOverview.hr.component');
var employeeEducation_hr_component_1 = require('../hr/employeeEducation.hr.component');
var employeeWorkExperience_hr_component_1 = require('../hr/employeeWorkExperience.hr.component');
var employeeTraining_hr_component_1 = require('../hr/employeeTraining.hr.component');
var employeeContract_hr_component_1 = require('../hr/employeeContract.hr.component');
var employeeSkills_hr_component_1 = require('../hr/employeeSkills.hr.component');
var homeRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
            {
                path: 'hr', component: hr_component_1.HRComponent, children: [
                    { path: '', redirectTo: 'employees' },
                    { path: 'employees', component: employees_hr_component_1.EmployeeListComponent },
                    { path: 'overview', component: employeeOverview_hr_component_1.EmployeeOverviewComponent },
                    { path: 'education', component: employeeEducation_hr_component_1.EmployeeEducationComponent },
                    { path: 'workExperience', component: employeeWorkExperience_hr_component_1.EmployeeWorkExperienceComponent },
                    { path: 'training', component: employeeTraining_hr_component_1.EmployeeTrainingComponent },
                    { path: 'contract', component: employeeContract_hr_component_1.EmployeeContractComponent },
                    { path: 'skills', component: employeeSkills_hr_component_1.EmployeeSkillsComponent }
                ]
            }
        ]
    }
];
exports.homeRouting = router_1.RouterModule.forChild(homeRoutes);
//# sourceMappingURL=home.routing.js.map