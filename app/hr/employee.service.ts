import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Config } from '../app.config';
import { Observable } from 'rxjs';
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

        return this.http.get(url, options).map(function (res, idx) {
            return res.json();
        });

    }

    getEmployeeById(Id: Number): Observable<any> {

        // todo
        var url = Config.url + `api/staff/fullinfo/${Id}`;

        console.log(url);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(url, options).map(res => res.json().data);


    }

    updateEmployee(employee : any){

        var url = Config.url + `api/staff/info`;

        return this.http.post(url, employee).map(res => res.json());

    }

}
