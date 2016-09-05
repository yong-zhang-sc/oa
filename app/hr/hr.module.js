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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var hr_component_1 = require('./hr.component');
var profile_hr_component_1 = require('./profile.hr.component');
var employees_hr_component_1 = require('./employees.hr.component');
var employeeOverview_hr_component_1 = require('./employeeOverview.hr.component');
var employeeEducation_hr_component_1 = require('./employeeEducation.hr.component');
var employeeWorkExperience_hr_component_1 = require('./employeeWorkExperience.hr.component');
var employeeTraining_hr_component_1 = require('./employeeTraining.hr.component');
var employeeContract_hr_component_1 = require('./employeeContract.hr.component');
var employeeSkills_hr_component_1 = require('./employeeSkills.hr.component');
// import { hrRouting } from './hr.routing';
var HRModule = (function () {
    function HRModule() {
    }
    HRModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [
                hr_component_1.HRComponent,
                profile_hr_component_1.EmployeeProfileComponent,
                employees_hr_component_1.EmployeeListComponent,
                employeeOverview_hr_component_1.EmployeeOverviewComponent,
                employeeEducation_hr_component_1.EmployeeEducationComponent,
                employeeWorkExperience_hr_component_1.EmployeeWorkExperienceComponent,
                employeeTraining_hr_component_1.EmployeeTrainingComponent,
                employeeContract_hr_component_1.EmployeeContractComponent,
                employeeSkills_hr_component_1.EmployeeSkillsComponent
            ],
            exports: [
                hr_component_1.HRComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], HRModule);
    return HRModule;
}());
exports.HRModule = HRModule;
//# sourceMappingURL=hr.module.js.map