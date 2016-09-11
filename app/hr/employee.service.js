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
                ChineseName: '王重阳',
                EnglishName: 'chongyang',
                Email: 'chongyang.wang@quanzhen.com',
                Mobile: 18888888888,
                Gender: '男',
                IdType: '身份证',
                IdNumber: '123456123456781234',
                Birthday: '1626/2/4',
                Race: '汉',
                MarialStatus: '未婚',
                RecidenceType: '外噗城镇',
                PoliticalLandscape: '党员',
                Education: '护国真人',
                DateOfWorking: '1630/3/2',
                HasGreenCard: false,
                JobTitle: '掌门',
                PersonalEmail: 'chongyang.wang@china.com',
                RecidenceLocation: '终南山重阳宫15号',
                RecidenceZipCode: 123456,
                LivingLocation: '终南山后山活死人墓',
                LivingZipCode: 654321,
                RecruitingChannel: '',
                RelativeInYiXinInfo: '有 全真七子',
                Organization: '全真教',
                EntryDate: '1662/10/25',
                Status: '在职',
                Leader: 'xxxx',
                Educations: [
                    {
                        StartTime: '1662-10-20',
                        EndTime: '1665-10-8',
                        SchoolName: '武当山太极八卦掌专业技术学校',
                        Specialty: '内家八卦掌',
                        Education: '大师'
                    },
                    {
                        StartTime: '1662-10-20',
                        EndTime: '1665-10-8',
                        SchoolName: '武当山太极八卦掌专业技术学校',
                        Specialty: '内家八卦掌',
                        Education: '大师'
                    }, {
                        StartTime: '1662-10-20',
                        EndTime: '1665-10-8',
                        SchoolName: '武当山太极八卦掌专业技术学校',
                        Specialty: '内家八卦掌',
                        Education: '大师'
                    }
                ],
                WorkingExperiences: [
                    {
                        StartTime: '1662-10-20',
                        EndTime: '1665-10-8',
                        CompanyName: '全真教武功研究与发展公司',
                        Department: '研发部',
                        Position: '先天功研究员',
                        VouchAndTel: '张三丰/12889786671',
                        LeavingReason: '个人'
                    },
                    {
                        StartTime: '1662-10-20',
                        EndTime: '1665-10-8',
                        CompanyName: '全真教武功研究与发展公司',
                        Department: '研发部',
                        Position: '先天功研究员',
                        VouchAndTel: '张三丰/12889786671',
                        LeavingReason: '个人'
                    },
                    {
                        StartTime: '1662-10-20',
                        EndTime: '1665-10-8',
                        CompanyName: '全真教武功研究与发展公司',
                        Department: '研发部',
                        Position: '先天功研究员',
                        VouchAndTel: '张三丰/12889786671',
                        LeavingReason: '个人'
                    }
                ],
                Trainings: [{
                        StartTime: '1662-10-20',
                        EndTime: '1665-10-8',
                        Institution: '山东蓝翔专业技术学校',
                        Result: '起重机2级'
                    }, {
                        StartTime: '1662-10-20',
                        EndTime: '1665-10-8',
                        Institution: '山东蓝翔专业技术学校',
                        Result: '起重机2级'
                    }, {
                        StartTime: '1662-10-20',
                        EndTime: '1665-10-8',
                        Institution: '山东蓝翔专业技术学校',
                        Result: '起重机2级'
                    }
                ],
                EmergencyLinkmen: [{
                        Name: '林朝英',
                        Relationship: '情侣',
                        Tel: 13814381438
                    }, {
                        Name: '林朝英',
                        Relationship: '情侣',
                        Tel: 13814381438
                    }
                ],
                Languages: [{
                        Name: '意大利语',
                        Level: '高级',
                        HasCertificate: true
                    }, {
                        Name: '意大利语',
                        Level: '高级',
                        HasCertificate: false
                    }, {
                        Name: '意大利语',
                        Level: '高级',
                        HasCertificate: true
                    }
                ]
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