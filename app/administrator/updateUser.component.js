"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var updateTemplate_component_1 = require('./../template/updateTemplate.component');
var core_1 = require('@angular/core');
var server_service_1 = require('../service/server.service');
var user_1 = require('./user');
var itemCat = require('./user');
var UpdateUserComponent = (function (_super) {
    __extends(UpdateUserComponent, _super);
    function UpdateUserComponent(injector, serverService) {
        _super.call(this, injector);
        this.serverService = serverService;
        this.area = itemCat.Area;
        this.auth = itemCat.Auth;
        this.authInChi = '';
        this.user = new user_1.User();
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        this.user.pushData(this.inputItem);
        this.authInChi = (this.user.auth == "admin") ? "管理員" : "一般使用者";
    };
    UpdateUserComponent.prototype.ngOnChanges = function () {
        this.user.pushData(this.inputItem);
        this.authInChi = (this.user.auth == "admin") ? "管理員" : "一般使用者";
    };
    UpdateUserComponent.prototype.sendClick = function () {
        this.user.auth = (this.authInChi == "管理員") ? "admin" : "user";
        var itemObject = this.user.getObject();
        var url = this.serverService.getUserUrl(this.user.user_name);
        this.Update(url, itemObject);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UpdateUserComponent.prototype, "inputItem", void 0);
    UpdateUserComponent = __decorate([
        core_1.Component({
            selector: 'updateUser',
            templateUrl: "app/administrator/updateUser.component.html"
        }), 
        __metadata('design:paramtypes', [core_1.Injector, server_service_1.ServerService])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}(updateTemplate_component_1.UpdateTemplateComponent));
exports.UpdateUserComponent = UpdateUserComponent;
//# sourceMappingURL=updateUser.component.js.map