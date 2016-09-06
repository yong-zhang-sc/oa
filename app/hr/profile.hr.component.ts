import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { CommunicationService } from '../communication.service';

@Component({
    selector: 'employee-profile',
    templateUrl: './app/hr/profile.hr.component.html'
})
export class EmployeeProfileComponent implements OnInit {

    selectedEmployeeId: number = 0;
    employee: any = {};
    emailPrefix: string = '';

    constructor(private _employeeService: EmployeeService, private _communicationService: CommunicationService) {

    }

    ngOnInit() {
        this._communicationService.selectedEmployeeAnnounced$.subscribe(employeeId => {
            this.selectedEmployeeId = employeeId;

            if (employeeId > 0) {

                this._employeeService.getEmployeeById(employeeId).subscribe(data => {

                    // this.employee = JSON.parse(JSON.stringify(data));
                    Object.assign(this.employee, data);
                    this.emailPrefix = data.Email.substring(0,data.Email.indexOf('@'));


                });
            }

        });
    }


}