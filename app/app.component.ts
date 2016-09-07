import {Input, Component } from '@angular/core';
import {MessageComponent} from './message.component';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <message></message>
        <router-outlet></router-outlet>

    </div>
    `
    
})
export class AppComponent {

}


