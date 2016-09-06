import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { CommunicationService } from '../communication.service';

@Component({
    selector: 'employee-profile',
    templateUrl: './app/hr/profile.hr.component.html'
})
export class EmployeeProfileComponent {

    selectedEmployeeId = 0;

    constructor(private employeeService: EmployeeService, private _communicationService: CommunicationService) {
        _communicationService.selectedEmployeeAnnounced$.subscribe((function (employeeId: number) {
            this.selectedEmployeeId = employeeId;

            // this._router.navigate(['../overview']);

        }).bind(this));
    }

 
}