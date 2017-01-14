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
var customer_service_1 = require('../services/customer.service');
var CustomerComponent = (function () {
    function CustomerComponent(customerService) {
        var _this = this;
        this.customerService = customerService;
        this.customerService.getCustomers()
            .subscribe(function (customers) {
            _this.customers = customers;
        });
    }
    CustomerComponent.prototype.addCustomer = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.firstName);
        var newCustomer = {
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            address: this.address,
            area: this.area,
            city: this.city,
            zip: this.zip,
            email: this.email
        };
        this.customerService.addCustomer(newCustomer)
            .subscribe(function (customer) {
            _this.customers.push(customer);
        });
    };
    CustomerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customers',
            templateUrl: 'customer.component.html'
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map