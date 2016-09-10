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
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
var EmailPrefixPipe = (function () {
    function EmailPrefixPipe() {
    }
    EmailPrefixPipe.prototype.transform = function (value) {
        if (!value)
            return '';
        return value.substring(0, value.indexOf('@'));
    };
    EmailPrefixPipe = __decorate([
        core_1.Pipe({ name: 'emailPrefix' }), 
        __metadata('design:paramtypes', [])
    ], EmailPrefixPipe);
    return EmailPrefixPipe;
}());
exports.EmailPrefixPipe = EmailPrefixPipe;
//# sourceMappingURL=emailPrefix.js.map