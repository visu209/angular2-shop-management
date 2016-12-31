import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {
    port: 'process.env.PORT || 3000';
    constructor(private http: Http) {
        console.log("customer service initialized...");
    }

    getCustomers() {
        return this.http.get('http://immense-island-54112.herokuapp.com/api/customers')
            .map(res => res.json());
    }
}