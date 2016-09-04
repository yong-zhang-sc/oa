"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var home_component_1 = require('./home.component');
var header_component_1 = require('./home/header.component');
var sidebar_component_1 = require('./home/sidebar.component');
var footer_component_1 = require('./home/footer.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var hr_component_1 = require('./hr/hr.component');
// import { }
// import { HeroService } from './hero.service';
var home_routing_1 = require('./home/home.routing');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                home_routing_1.homeRouting
            ],
            declarations: [
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                footer_component_1.FooterComponent,
                dashboard_component_1.DashboardComponent,
                hr_component_1.HRComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map