"use strict";
var router_1 = require('@angular/router');
var hr_component_1 = require('./hr.component');
var employees_hr_component_1 = require('./employees.hr.component');
var employeeOverview_hr_component_1 = require('./employeeOverview.hr.component');
var employeeEducation_hr_component_1 = require('./employeeEducation.hr.component');
var employeeWorkExperience_hr_component_1 = require('./employeeWorkExperience.hr.component');
var employeeTraining_hr_component_1 = require('./employeeTraining.hr.component');
var employeeContract_hr_component_1 = require('./employeeContract.hr.component');
var employeeSkills_hr_component_1 = require('./employeeSkills.hr.component');
var hrRoutes = [
    {
        path: 'home/hr', component: hr_component_1.HRComponent, children: [
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
];
exports.hrRouting = router_1.RouterModule.forChild(hrRoutes);
//# sourceMappingURL=hr.routing.js.map