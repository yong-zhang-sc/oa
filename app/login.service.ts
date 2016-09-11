import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Config } from './app.config';
import { Observable, Subscriber } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

    constructor(private http: Http) {

    }

    login(account: string, password: string) {

        var url = Config.url + `api/account/login`;

        console.log(url);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });


        return Observable.create(function (observer: any) {
            observer.next({ valid: true });
        });
        // return this.http.post(url, { Account: account, Password: password }, options).map(res => res.json() );

    }
}
