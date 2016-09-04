import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from './login.service';


@Component({
    selector: 'login',
    templateUrl: './app/login.component.html'
    // template: `
    // <h1>my log in page</h1>
    // <button type='button' (click)='login()'> Login </button>
    // `
})
export class LoginComponent {


    constructor(private router: Router, private service: LoginService) {
    }

    login(email: string, password: string) {


        console.log(email + ' ' + password);

        // this.service.login(email, password).subscribe(result => console.log(result));
        // this.service.login(email, password).then(function (res) {
        //     console.log(res);

        //     this.router.navigate(['/home']);

        // });

        var result = this.service.login(email, password);

        if (result.success == true) {
            this.router.navigate(['/home']);
        }


    }
}