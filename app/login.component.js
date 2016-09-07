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
var router_1 = require('@angular/router');
var login_service_1 = require('./login.service');
var message_service_1 = require('./message.service');
var LoginComponent = (function () {
    function LoginComponent(router, service, _messageService) {
        this.service = service;
        this._messageService = _messageService;
        this.router = router;
    }
    LoginComponent.prototype.login = function (account, password) {
        if (!account || !password) {
            this._messageService.announceEmployeeChanged({ type: 'warning', message: '您输入的用户名密码均不能为空.' });
            return;
        }
        var result = this.service.login(account, password).subscribe((function (res) {
            console.log(res);
            if (res.valid) {
                this._messageService.announceEmployeeChanged({ type: '', message: '' });
                this.router.navigate(['/home']);
            }
            else {
                this._messageService.announceEmployeeChanged({ type: 'warning', message: '登录失败，请检查用户名密码.' });
            }
        }).bind(this));
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService, message_service_1.MessageService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map