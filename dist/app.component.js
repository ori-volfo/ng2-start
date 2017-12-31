"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.users = [
            { id: 33, name: 'Ori', username: 'Volfo' },
            { id: 14, name: 'Morty', username: 'Mort' },
            { id: 55, name: 'Rick', username: 'Sanchez' }
        ];
    }
    AppComponent.prototype.selectedUser = function (user) {
        this.activeUser = user;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<header>\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"navabr-header\">\n            <a href=\"/\" class=\"navbar-brand\">My Angular 2 app!</a>\n        </div>\n    </nav>\n</header>\n<main>\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <div *ngIf=\"users\">\n                <ul class=\"list-group users-list\">\n                    <li *ngFor=\"let user of users\" (click)=\"selectedUser(user)\" [class.active]=\"user === activeUser\" class=\"list-group-item\">The user is {{user.name}} {{user.username}}.</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-sm-8\">\n            <div class=\"jumbotron\" *ngIf=\"activeUser\">\n                <h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2>\n            </div>\n            <div class=\"jumbotron\" *ngIf=\"!activeUser\">\n                <span class=\"glyphicon glyphicon-hand-left\"></span>\n                <h2>Choose a User</h2>\n            </div>\n        </div>\n    </div>\n    \n    \n</main>\n\n<footer class=\"text-center\">\n    copyright &copy; 2017\n</footer>\n    ", styles: ["\n        .user-list li {cursor: pointer}\n        .jumbotron .glyphicon{font-size: 80px;}\n    "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map