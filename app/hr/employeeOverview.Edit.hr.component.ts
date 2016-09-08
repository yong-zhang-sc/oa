import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { CommunicationService } from '../communication.service';
import { EmployeeEntity } from './employee.entity';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
    //selector: 'employee-profile',
    templateUrl: './app/hr/employeeOverview.edit.hr.component.html'
})
export class EmployeeOverviewEditComponent implements OnInit {

    employee: any = {};
    employeeId: number = 0;

    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private _employeeService: EmployeeService, 
        private _communicationService: CommunicationService,
        private _messageService : MessageService) {


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

    onSubmit(form: any) {
        console.log(form);

        if(form.errors){
            this._messageService.announceEmployeeChanged({type : 'warning', message: '您提交的数据不正确'})
            return;
        }

        var newObj = {};
        Object.assign(newObj, form.value);

        
    }
}