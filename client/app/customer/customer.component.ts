import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service'
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

    constructor(private customerService: CustomerService) {
        this.customerService.getCustomers()
            .subscribe(customers => {
                this.customers = customers;
            });
    }

    addCustomer(event: any) {
        event.preventDefault();

        var newCustomer = {
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            address: this.address,
            area: this.area,
            city: this.city,
            zip: this.zip,
            email: this.email
        }

        this.customerService.addCustomer(newCustomer)
            .subscribe(customer => {
                this.customers.push(customer);
            });
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