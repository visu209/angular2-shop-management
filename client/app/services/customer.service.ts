import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {
    constructor(private http: Http) {
        console.log("customer service initialized...");
    }

    getCustomers() {
        return this.http.get('http://localhost:3000/api/customers')
            .map(res => res.json());
    }
}