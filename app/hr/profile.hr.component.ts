import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './employee.service';
import { CommunicationService } from '../communication.service';

@Component({
    selector: 'employee-profile',
    templateUrl: './app/hr/profile.hr.component.html'
})
export class EmployeeProfileComponent {


    @Input() employee: any;


    constructor() {
        console.log(this.employee);
    }
    ngOnInit() {
        console.log(JSON.stringify( this.employee));
        
    }




    // ngOnInit() {
    //     this._communicationService.selectedEmployeeAnnounced$.subscribe(employeeId => {
    //         this.selectedEmployeeId = employeeId;

    //         if (employeeId > 0) {

    //             this._employeeService.getEmployeeById(employeeId).subscribe(data => {

    //                 // this.employee = JSON.parse(JSON.stringify(data));
    //                 Object.assign(this.employee, data);
    //                 this.emailPrefix = data.Email.substring(0,data.Email.indexOf('@'));


    //             });
    //         }
    //     });
    // }
}