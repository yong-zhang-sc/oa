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
var employee_service_1 = require('./employee.service');
var router_1 = require('@angular/router');
var communication_service_1 = require('../communication.service');
var EmployeeSkillsComponent = (function () {
    function EmployeeSkillsComponent(route, _employeeService, _communicationService) {
        this.route = route;
        this._employeeService = _employeeService;
        this._communicationService = _communicationService;
        this.employee = {};
        this.employeeId = 0;
    }
    EmployeeSkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.employeeId = +params['Id'];
            _this._communicationService.announceEmployeeChanged(_this.employeeId);
            _this._employeeService.getEmployeeById(_this.employeeId).subscribe(function (data) {
                Object.assign(_this.employee, data);
                console.log(_this.employee.Languages);
            });
        });
    };
    EmployeeSkillsComponent = __decorate([
        core_1.Component({
            //selector: 'employee-profile',
            templateUrl: './app/hr/employeeSkills.hr.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, employee_service_1.EmployeeService, communication_service_1.CommunicationService])
    ], EmployeeSkillsComponent);
    return EmployeeSkillsComponent;
}());
exports.EmployeeSkillsComponent = EmployeeSkillsComponent;
//# sourceMappingURL=employeeSkills.hr.component.js.map