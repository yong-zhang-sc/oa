import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { HomeModule } from './home.module';
// import {HeaderComponent} from './home/header.component';
// import {SidebarComponent} from './home/sidebar.component';

import { routing } from './app.routing';


import {LoginService} from './login.service';

@NgModule({
  imports: [ BrowserModule ,routing,HomeModule,HttpModule ],
  declarations: [ AppComponent ,LoginComponent  ],
  bootstrap: [ AppComponent ],
  providers :[LoginService]
})
export class AppModule { }
