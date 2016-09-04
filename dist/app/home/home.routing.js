"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../dashboard/dashboard.component');
var hr_component_1 = require('../hr/hr.component');
var home_component_1 = require('../home.component');
var homeRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
            { path: 'hr', component: hr_component_1.HRComponent }
        ]
    }
];
exports.homeRouting = router_1.RouterModule.forChild(homeRoutes);
//# sourceMappingURL=home.routing.js.map