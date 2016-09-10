import { Component, EventEmitter, Input, Output  } from '@angular/core';
import {EmployeeService} from './employee.service';
import { Observable } from 'rxjs';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';

@Component({
    //selector: 'employee-profile',
    templateUrl: './app/hr/employees.hr.component.html'

})
export class EmployeeListComponent {


    // @Output() onEmployeeSelected = new EventEmitter();
    public _employeeList: Array<any>;
    keyword: string = '';
    status : number = 0;

    constructor(private _employeeService: EmployeeService, private _communicationService: CommunicationService, private _router: Router) {

    }

    ngOnInit() {
        this._communicationService.announceEmployeeChanged(0);

        this._employeeService.getEmployeeList().subscribe((function (res: any) {

            console.log(res);

            this._employeeList = res;

        }).bind(this));
    }

    selectStatus(status : number){
        // if(status == 0){}
        this.status = status;
    }

    selectEmployee(employee: any) {

        console.log('announcing ' + JSON.stringify(employee));

        this._communicationService.announceEmployeeChanged(employee.AccountId);
        this._router.navigate(['home/hr/overview', employee.AccountId]);

    }
}