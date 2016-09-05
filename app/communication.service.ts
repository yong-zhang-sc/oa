import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class CommunicationService {
  // Observable string sources
  private selectedEmployeeSource = new Subject<any>();
  //   private missionConfirmedSource = new Subject<string>();
  // Observable string streams
  selectedEmployeeAnnounced$ = this.selectedEmployeeSource.asObservable();
  //   missionConfirmed$ = this.missionConfirmedSource.asObservable();
  // Service message commands
  announceEmployeeChanged(employee: any) {
    this.selectedEmployeeSource.next(employee);
  }
  //   confirmMission(astronaut: string) {
  //     this.missionConfirmedSource.next(astronaut);
  //   }
}