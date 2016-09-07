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
var message_service_1 = require('./message.service');
var MessageComponent = (function () {
    function MessageComponent(_messageService) {
        var _this = this;
        this._messageService = _messageService;
        this.message = '';
        this.type = '';
        _messageService.messageAnnounced.subscribe(function (msg) { _this.type = msg.type; _this.message = msg.message; });
    }
    MessageComponent.prototype.close = function () {
        this.message = '';
        this.type = '';
    };
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'message',
            template: "\n    <div class=\"alert alert-success fade in\" *ngIf=\"type=='success'\">\n        <a href=\"#\" class=\"close\" data-dismiss=\"alert\" (click)=\"close()\">&times;</a>\n        <strong>Success!</strong> {{message}}\n    </div>\n    <div class=\"alert alert-info fade in\" *ngIf=\"type=='info'\">\n        <a href=\"#\" class=\"close\" data-dismiss=\"alert\" (click)=\"close()\">&times;</a>\n        <strong>Note!</strong> {{message}}\n    </div>\n    <div class=\"alert alert-warning fade in\" *ngIf=\"type=='warning'\">\n        <a href=\"#\" class=\"close\" data-dismiss=\"alert\" (click)=\"close()\">&times;</a>\n        <strong>Warning!</strong> {{message}}\n    </div>\n    <div class=\"alert alert-danger fade in\" *ngIf=\"type=='error'\">\n        <a href=\"#\" class=\"close\" data-dismiss=\"alert\" (click)=\"close()\">&times;</a>\n        <strong>Error!</strong> {{message}}\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map