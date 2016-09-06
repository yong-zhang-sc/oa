import { Component, OnInit} from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
    //selector: 'employee-profile',
    templateUrl: './app/hr/employeeTraining.hr.component.html'
})
export class EmployeeTrainingComponent implements OnInit {
    employee: any = {};
    employeeId: number = 0;

    constructor(private route: ActivatedRoute, private _employeeService: EmployeeService, private _communicationService: CommunicationService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.employeeId = +params['Id'];
            this._communicationService.announceEmployeeChanged(this.employeeId);

            this._employeeService.getEmployeeById(this.employeeId).subscribe(data => {

                Object.assign(this.employee, data);

                console.log(this.employee.Educations);

            });
        });
    }
}