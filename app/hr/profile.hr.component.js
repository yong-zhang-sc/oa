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
var EmployeeProfileComponent = (function () {
    function EmployeeProfileComponent(_employeeService, _communicationService) {
        this._employeeService = _employeeService;
        this._communicationService = _communicationService;
        this.selectedEmployeeId = 0;
        this.employee = {};
        this.emailPrefix = '';
    }
    EmployeeProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._communicationService.selectedEmployeeAnnounced$.subscribe(function (employeeId) {
            _this.selectedEmployeeId = employeeId;
            if (employeeId > 0) {
                _this._employeeService.getEmployeeById(employeeId).subscribe(function (data) {
                    // this.employee = JSON.parse(JSON.stringify(data));
                    Object.assign(_this.employee, data);
                    _this.emailPrefix = data.Email.substring(0, data.Email.indexOf('@'));
                });
            }
        });
    };
    EmployeeProfileComponent = __decorate([
        core_1.Component({
            selector: 'employee-profile',
            templateUrl: './app/hr/profile.hr.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, communication_service_1.CommunicationService])
    ], EmployeeProfileComponent);
    return EmployeeProfileComponent;
}());
exports.EmployeeProfileComponent = EmployeeProfileComponent;
//# sourceMappingURL=profile.hr.component.js.map