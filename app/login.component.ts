import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from './login.service';
import { Observable } from 'rxjs';


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

    constructor(router: Router, private service: LoginService) {
        this.router = router;
    }

    login(account: string, password: string) {

        var result = this.service.login(account, password).subscribe((function (res: any) {
            console.log(res);

            if (res.valid) {
                this.router.navigate(['/home']);
            }
            else {
                alert(res.message);
            }

        }).bind(this)
        );


    }
}