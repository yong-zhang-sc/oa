import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class MessageService {

  // Observable string sources
  private messageSource = new Subject<Message>();

  // Observable string streams
  messageAnnounced = this.messageSource.asObservable();

  // Service message commands
  announceEmployeeChanged(message : Message) {
    this.messageSource.next(message);
  }
}

export interface Message{
    type : string;
    message : string;
}