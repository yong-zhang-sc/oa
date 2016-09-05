import { Component, EventEmitter, Input, Output  } from '@angular/core';

import {EmployeeService} from './employee.service';
import { Observable } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
    //selector: 'employee-profile',
    templateUrl: './app/hr/employees.hr.component.html'

})
export class EmployeeListComponent {


    // @Output() onEmployeeSelected = new EventEmitter();
    public _employeeList: Array<any>;
    keyword: string = '';

    constructor(private _employeeService: EmployeeService, private _communicationService: CommunicationService) {

    }

    ngOnInit() {
        this._employeeService.getEmployeeList().subscribe((function (res: any) {

            console.log(res);

            this._employeeList = res;


        }).bind(this));
    }


    selectEmployee(employee: any) {

        console.log('announcing ' + JSON.stringify(employee));

        this._communicationService.announceEmployeeChanged(employee);
    }
}