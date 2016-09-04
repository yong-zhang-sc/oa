"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var home_component_1 = require('./home/home.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
// import { HomeModule } from './home.module';
var appRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map