import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Config } from '../app.config';
import { Observable, Subscriber } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService {

    constructor(private http: Http) {

    }

    getEmployeeList() {
        var url = Config.url + `api/staff/staffs`;

        console.log(url);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        // return Observable.create()

        return Observable.create(function (observer: Subscriber<any>) {
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

    }

    getEmployeeById(Id: Number): Observable<any> {

        // todo
        var url = Config.url + `api/staff/fullinfo/${Id}`;

        console.log(url);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return Observable.from([{
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


    }

    updateEmployee(employee: any) {

        var url = Config.url + `api/staff/info`;

        return this.http.post(url, employee).map(res => res.json());

    }

}
