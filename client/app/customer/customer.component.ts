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

    constructor(private customerService: CustomerService) {
        this.customerService.getCustomers()
            .subscribe(customers => {
                this.customers = customers;
            });
    }
}