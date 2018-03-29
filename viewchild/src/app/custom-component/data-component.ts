import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'data-component',
    template: `
    <h3>Name: <span style="color:green;font-size:18px">{{employeeName}}</span></h3>
    <h3>City: <span style="color:green;font-size:18px">{{employeeCity}}</span></h3>
    <h3>Salary: <span style="color:green;font-size:18px">{{employeeSalary}}</span></h3>
    <button (click)="emitSendRecordEvent()">Select Record</button>
    <hr />
    `
})
export class DataComponent {
    @Input('name') employeeName: string;
    @Input('city') employeeCity: string;
    @Input('salary') employeeSalary: number;
    @Output() sendRecord: EventEmitter<any> = new EventEmitter();

    public emitSendRecordEvent(){
        let selectedEmployeeObj: any = {
            selectedName: this.employeeName,
            selectedCity: this.employeeCity,
            selectedSalary: this.employeeSalary

        };
        this.sendRecord.emit(selectedEmployeeObj);
    }
}