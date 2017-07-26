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
var forms_1 = require('@angular/forms');
var CustomerComponent = (function () {
    function CustomerComponent(customerService, fb) {
        var _this = this;
        this.customerService = customerService;
        this.fb = fb;
        this.customerForm = this.fb.group({
            firstName: ["", forms_1.Validators.required],
            lastName: [""],
            phone: [""],
            address: [""],
            city: [""],
            area: [""],
            zip: [""],
            email: [""]
        });
        this.customerService.getLitrs()
            .subscribe(function (litrs) {
            _this.litrs = litrs;
        });
    }
    CustomerComponent.prototype.addNewCustomer = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
        var newCustomer = {
            firstName: value.firstName,
            lastName: value.lastName,
            phone: value.phone,
            address: value.address,
            area: value.area,
            city: value.city,
            zip: value.zip,
            email: value.email
        };
        this.customerService.addCustomer(newCustomer).subscribe(function (customer) {
            _this.customers.push(customer);
        });
    };
    CustomerComponent.prototype.deleteCustomer = function (id) {
        var customers = this.customers;
        this.customerService.deleteCustomer(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < customers.length; i++) {
                    if (customers[i]._id == id) {
                        customers.splice(i, 1);
                    }
                }
            }
        });
    };
    CustomerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customers',
            templateUrl: 'customer.component.html'
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService, forms_1.FormBuilder])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map