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
var core_1 = require('@angular/core');
var donor_1 = require('./donor');
var server_service_1 = require('../service/server.service');
var addTemplate_component_1 = require('../template/addTemplate.component');
var donorCat = require('./donor');
var AddDonorComponent = (function (_super) {
    __extends(AddDonorComponent, _super);
    function AddDonorComponent(injector, serverService) {
        _super.call(this, injector);
        this.serverService = serverService;
        this.isGroup = false;
        this.donor = new donor_1.Donor();
        this.category = [];
        this.area = [];
        this.category = donorCat.Category;
        this.area = donorCat.Area;
    }
    AddDonorComponent.prototype.addDonorClick = function () {
        var donorObject = this.donor.getObject();
        var url = this.serverService.getDonorUrl(this.donor.donor_name);
        this.Add(url, donorObject);
    };
    AddDonorComponent.prototype.catChange = function (value) {
        console.log(value);
        this.isGroup = (value === '團體') ? true : false;
    };
    AddDonorComponent = __decorate([
        core_1.Component({
            selector: 'addDonor',
            templateUrl: "app/donor/addDonor.component.html"
        }), 
        __metadata('design:paramtypes', [core_1.Injector, server_service_1.ServerService])
    ], AddDonorComponent);
    return AddDonorComponent;
}(addTemplate_component_1.AddTemplateComponent));
exports.AddDonorComponent = AddDonorComponent;
//# sourceMappingURL=addDonor.component.js.map