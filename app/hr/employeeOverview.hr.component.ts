import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { CommunicationService } from '../communication.service';


@Component({
    //selector: 'employee-profile',
    templateUrl: './app/hr/employeeOverview.hr.component.html'
})
export class EmployeeOverviewComponent implements OnInit {

    employee: any = {};
    employeeId: number = 0;

    constructor(private route: ActivatedRoute, private router: Router, private _employeeService: EmployeeService, private _communicationService: CommunicationService) {

    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.employeeId = +params['Id'];
            this._communicationService.announceEmployeeChanged(this.employeeId);

            this._employeeService.getEmployeeById(this.employeeId).subscribe(data => {

                Object.assign(this.employee, data);
               
            });
        });
    }

    edit(){

        this.router.navigate(['/home/hr/overviewEdit/', this.employeeId]);
    }

}