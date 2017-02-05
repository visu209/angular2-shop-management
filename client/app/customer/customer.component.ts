import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service'
import { FormBuilder, Validators } from '@angular/forms'
import { Customer } from './customer';

@Component({
    moduleId: module.id,
    selector: 'customers',
    templateUrl: 'customer.component.html'
})

export class CustomerComponent {

    customers: Customer[];
    firstName: string;
    lastName: string;
    phone: number;
    address: string;
    area: string;
    city: string;
    zip: string;
    email: string;

    constructor(private customerService: CustomerService, private fb: FormBuilder) {
        this.customerService.getCustomers()
            .subscribe(customers => {
                this.customers = customers;
            });
    }

    public customerForm = this.fb.group({
        firstName: ["", Validators.required],
        lastName: [""],
        phone: [""],
        address: [""],
        city: [""],
        area: [""],
        zip: [""],
        email: [""]
    });

    addNewCustomer({value, valid}: { value: Customer, valid: Boolean }) {
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
        }

        this.customerService.addCustomer(newCustomer).subscribe(customer => {
            this.customers.push(customer);
        })
    }

    deleteCustomer(id: any) {
        var customers = this.customers;

        this.customerService.deleteCustomer(id).subscribe(data => {
            if (data.n == 1) {
                for (var i = 0; i < customers.length; i++) {
                    if (customers[i]._id == id) {
                        customers.splice(i, 1);
                    }
                }
            }
        });
    }
}