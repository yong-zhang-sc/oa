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
var router_1 = require('@angular/router');
var employee_service_1 = require('./employee.service');
var EmployeeOverviewComponent = (function () {
    function EmployeeOverviewComponent(route, router, _employeeService) {
        this.route = route;
        this.router = router;
        this._employeeService = _employeeService;
        this.employee = null;
    }
    EmployeeOverviewComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
        });
    };
    EmployeeOverviewComponent = __decorate([
        core_1.Component({
            //selector: 'employee-profile',
            templateUrl: './app/hr/employeeOverview.hr.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, employee_service_1.EmployeeService])
    ], EmployeeOverviewComponent);
    return EmployeeOverviewComponent;
}());
exports.EmployeeOverviewComponent = EmployeeOverviewComponent;
//# sourceMappingURL=employeeOverview.hr.component.js.map