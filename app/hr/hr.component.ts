import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';


@Component({
    // selector: 'hr',
    templateUrl: './app/hr/hr.component.html'

})
export class HRComponent {

    selectedEmployeeId = 0;

    constructor(private _communicationService: CommunicationService, private _router: Router) {

        _communicationService.selectedEmployeeAnnounced$.subscribe((function (employeeId: number) {
            this.selectedEmployeeId = employeeId;

        }).bind(this));

    }
}