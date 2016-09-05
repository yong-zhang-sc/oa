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
var communication_service_1 = require('../communication.service');
var router_1 = require('@angular/router');
var HRComponent = (function () {
    function HRComponent(_communicationService, _router) {
        this._communicationService = _communicationService;
        this._router = _router;
        this.selectedEmployee = null;
        _communicationService.selectedEmployeeAnnounced$.subscribe((function (employee) {
            this.selectedEmployee = employee;
            this._router.navigate(['home/hr/overview', this.selectedEmployee.Id]);
        }).bind(this));
    }
    HRComponent = __decorate([
        core_1.Component({
            // selector: 'hr',
            templateUrl: './app/hr/hr.component.html'
        }), 
        __metadata('design:paramtypes', [communication_service_1.CommunicationService, router_1.Router])
    ], HRComponent);
    return HRComponent;
}());
exports.HRComponent = HRComponent;
//# sourceMappingURL=hr.component.js.map