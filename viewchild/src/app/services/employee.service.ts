import {Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {
    public employeeRecord =[
        {name: 'Sachin', city: 'Mumbai', age: 43, id: 'e1'},
        {name: 'Dhoni', city: 'Ranchi', age: 34, id: 'e2'},
        {name: 'Yusuf', city: 'Varodra', age: 36, id: 'e3'},
        {name: 'Kohli', city: 'New Delhi', age: 29, id: 'e4'}
    ];


    public getEmployee ( id: string ): any {
        let employee: any;
        for ( let i=0; i < this.employeeRecord.length; i++ ){
            if ( id === this.employeeRecord[i].id ) {
                employee =  this.employeeRecord[i];
                break;
            }
        }
        return employee;

    }
}