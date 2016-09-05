import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { CommunicationService } from '../communication.service';

@Component({
    selector: 'employee-profile',
    templateUrl: './app/hr/profile.hr.component.html'
})
export class EmployeeProfileComponent {

    selectedEmployee : any = null;

    constructor(private employeeService: EmployeeService, private _communicationService : CommunicationService) {
        _communicationService.selectedEmployeeAnnounced$.subscribe((function(employee : any){
            this.selectedEmployee = employee;

            // this._router.navigate(['../overview']);

        }).bind(this));
    }
}