'use strict'

class Employee {

    constructor(id, firstName, lastName, jobTitle, payRate){
        this.employee = id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.jobTitle=jobTitle;
        this.payRate=payRate;
    }
}


let e1 = new Employee(1,'Olivia','Johnson','Teacher',9.99)
let e2= new Employee(2, 'Alexia','Mkcoy','Principal',12.00)

console.log(e1.id);