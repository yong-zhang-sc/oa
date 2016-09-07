import { Component } from '@angular/core';
import { MessageService, Message } from './message.service';

@Component({
    selector: 'message',
    template: `
    <div class="alert alert-success fade in" *ngIf="type=='success'">
        <a href="#" class="close" data-dismiss="alert" (click)="close()">&times;</a>
        <strong>Success!</strong> {{message}}
    </div>
    <div class="alert alert-info fade in" *ngIf="type=='info'">
        <a href="#" class="close" data-dismiss="alert" (click)="close()">&times;</a>
        <strong>Note!</strong> {{message}}
    </div>
    <div class="alert alert-warning fade in" *ngIf="type=='warning'">
        <a href="#" class="close" data-dismiss="alert" (click)="close()">&times;</a>
        <strong>Warning!</strong> {{message}}
    </div>
    <div class="alert alert-danger fade in" *ngIf="type=='error'">
        <a href="#" class="close" data-dismiss="alert" (click)="close()">&times;</a>
        <strong>Error!</strong> {{message}}
    </div>
    `
})
export class MessageComponent {

    message: string = '';
    type: string = '';


    constructor(private _messageService : MessageService){

        _messageService.messageAnnounced.subscribe(msg => {this.type = msg.type; this.message = msg.message});

    }

    close(){
        this.message = '';
        this.type = '';
    }

}