import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';


@Component({
    // selector: 'hr',
    templateUrl: './app/hr/hr.component.html'

})
export class HRComponent {

    selectedEmployee: any = null;

    constructor(private _communicationService: CommunicationService, private _router: Router) {

        _communicationService.selectedEmployeeAnnounced$.subscribe((function (employee: any) {
            this.selectedEmployee = employee;
            this._router.navigate(['home/hr/overview', this.selectedEmployee.Id]);

        }).bind(this));

    }
}