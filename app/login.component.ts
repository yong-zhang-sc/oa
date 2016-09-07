import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from './login.service';
import { Observable } from 'rxjs';
import { MessageService, Message } from './message.service';


@Component({
    selector: 'login',
    templateUrl: './app/login.component.html'
    // template: `
    // <h1>my log in page</h1>
    // <button type='button' (click)='login()'> Login </button>
    // `
})
export class LoginComponent {

    public router: Router;

    constructor(router: Router, private service: LoginService, private _messageService: MessageService) {
        this.router = router;
    }

    login(account: string, password: string) {

        if (!account || !password) {
            this._messageService.announceEmployeeChanged({ type: 'warning', message: '您输入的用户名密码均不能为空.' })

            return;
        }

        var result = this.service.login(account, password).subscribe((function (res: any) {
            console.log(res);

            if (res.valid) {
                this._messageService.announceEmployeeChanged({ type: '', message: '' });

                this.router.navigate(['/home']);
            }
            else {
                this._messageService.announceEmployeeChanged({ type: 'warning', message: '登录失败，请检查用户名密码.' });
            }

        }).bind(this)
        );


    }
}