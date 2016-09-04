import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent} from './home/header.component';
import { SidebarComponent} from './home/sidebar.component';
import { FooterComponent} from './home/footer.component';
import { DashboardComponent} from './dashboard/dashboard.component';

import {HRModule} from './hr/hr.module';

import { routing } from './app.routing';


import {LoginService} from './login.service';

@NgModule({
  imports: [BrowserModule, routing, HttpModule, HRModule],
  declarations: [AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent],
  providers: [LoginService]
})
export class AppModule { }
