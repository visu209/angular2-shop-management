"use strict";
var Customer = (function () {
    function Customer(firstName, lastName, phone, address1, address2, area, city, zip, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address1 = address1;
        this.address2 = address2;
        this.area = area;
        this.city = city;
        this.zip = zip;
        this.email = email;
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map