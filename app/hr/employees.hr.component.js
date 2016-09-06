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
var communication_service_1 = require('../communication.service');
var router_1 = require('@angular/router');
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService, _communicationService, _router) {
        this._employeeService = _employeeService;
        this._communicationService = _communicationService;
        this._router = _router;
        this.keyword = '';
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this._employeeService.getEmployeeList().subscribe((function (res) {
            console.log(res);
            this._employeeList = res;
        }).bind(this));
    };
    EmployeeListComponent.prototype.selectEmployee = function (employee) {
        console.log('announcing ' + JSON.stringify(employee));
        this._communicationService.announceEmployeeChanged(employee.AccountId);
        this._router.navigate(['home/hr/overview', employee.AccountId]);
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            //selector: 'employee-profile',
            templateUrl: './app/hr/employees.hr.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, communication_service_1.CommunicationService, router_1.Router])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employees.hr.component.js.map