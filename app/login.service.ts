import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Config } from './app.config';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService {

    constructor(private http: Http) {

    }

    login(email: string, password: string) {


        var url = '';
        // var url = Config.url + `account/login?email=${email}&password=${password}`;

        console.log(url);

        // return Promise.resolve({ success: true, code: 0, message: 'login success', data: '' });
        // return this.http.get(url).toPromise();
        return { success : true, code : 0, message : 'login success', data : ''} ;

    }
}
