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


    }

    updateEmployee(employee: any) {

        var url = Config.url + `api/staff/info`;

        return this.http.post(url, employee).map(res => res.json());

    }

}
