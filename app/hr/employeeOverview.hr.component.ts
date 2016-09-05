import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
    //selector: 'employee-profile',
    templateUrl: './app/hr/employeeOverview.hr.component.html'
})
export class EmployeeOverviewComponent {

    employee: any = null;

    constructor(private route: ActivatedRoute, private router: Router, private _employeeService : EmployeeService) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number

            


        });
    }

}