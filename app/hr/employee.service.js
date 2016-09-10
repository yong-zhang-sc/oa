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
var http_1 = require('@angular/http');
var app_config_1 = require('../app.config');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.getEmployeeList = function () {
        var url = app_config_1.Config.url + "api/staff/staffs";
        console.log(url);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        // return Observable.create()
        return Rx_1.Observable.create(function (observer) {
            observer.next([{
                    AccountId: 1,
                    LoginName: '王重阳',
                    Email: 'chongyang.wang@quanzhen.com',
                    Mobile: 18888888888,
                    JobTitle: '掌门',
                    Organization: '全真教',
                    EntryDate: '1662/10/25',
                    Status: '在职'
                }, {
                    AccountId: 1,
                    LoginName: '王重阳',
                    Email: 'chongyang.wang@quanzhen.com',
                    Mobile: 18888888888,
                    JobTitle: '掌门',
                    Organization: '全真教',
                    EntryDate: '1662/10/25',
                    Status: '在职'
                }, {
                    AccountId: 1,
                    LoginName: '王重阳',
                    Email: 'chongyang.wang@quanzhen.com',
                    Mobile: 18888888888,
                    JobTitle: '掌门',
                    Organization: '全真教',
                    EntryDate: '1662/10/25',
                    Status: '在职'
                }, {
                    AccountId: 1,
                    LoginName: '王重阳',
                    Email: 'chongyang.wang@quanzhen.com',
                    Mobile: 18888888888,
                    JobTitle: '掌门',
                    Organization: '全真教',
                    EntryDate: '1662/10/25',
                    Status: '在职'
                }, {
                    AccountId: 1,
                    LoginName: '王重阳',
                    Email: 'chongyang.wang@quanzhen.com',
                    Mobile: 18888888888,
                    JobTitle: '掌门',
                    Organization: '全真教',
                    EntryDate: '1662/10/25',
                    Status: '在职'
                }, {
                    AccountId: 1,
                    LoginName: '王重阳',
                    Email: 'chongyang.wang@quanzhen.com',
                    Mobile: 18888888888,
                    JobTitle: '掌门',
                    Organization: '全真教',
                    EntryDate: '1662/10/25',
                    Status: '在职'
                }, {
                    AccountId: 1,
                    LoginName: '王重阳',
                    Email: 'chongyang.wang@quanzhen.com',
                    Mobile: 18888888888,
                    JobTitle: '掌门',
                    Organization: '全真教',
                    EntryDate: '1662/10/25',
                    Status: '在职'
                }, {
                    AccountId: 1,
                    LoginName: '王重阳',
                    Email: 'chongyang.wang@quanzhen.com',
                    Mobile: 18888888888,
                    JobTitle: '掌门',
                    Organization: '全真教',
                    EntryDate: '1662/10/25',
                    Status: '在职'
                }, {
                    AccountId: 1,
                    LoginName: '王重阳',
                    Email: 'chongyang.wang@quanzhen.com',
                    Mobile: 18888888888,
                    JobTitle: '掌门',
                    Organization: '全真教',
                    EntryDate: '1662/10/25',
                    Status: '在职'
                }]);
            observer.complete();
        });
        // return this.http.get(url, options).map(function (res, idx) {
        //     return res.json();
        // });
    };
    EmployeeService.prototype.getEmployeeById = function (Id) {
        // todo
        var url = app_config_1.Config.url + ("api/staff/fullinfo/" + Id);
        console.log(url);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return Rx_1.Observable.from([{
                AccountId: 1,
                LoginName: '王重阳',
                Email: 'chongyang.wang@quanzhen.com',
                Mobile: 18888888888,
                JobTitle: '掌门',
                Organization: '全真教',
                EntryDate: '1662/10/25',
                Status: '在职',
                Leader: 'xxxx'
            }]);
        // return this.http.get(url, options).map(res => res.json().data);
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        var url = app_config_1.Config.url + "api/staff/info";
        return this.http.post(url, employee).map(function (res) { return res.json(); });
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map