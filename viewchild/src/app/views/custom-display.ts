import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'disp-comp',
    template: `
    <h3>Player Name:{{pName}}</h3>
    <h3>Player City:{{pCity}}</h3>
    <h3>Player Salary:{{pSalary}}</h3>
    <button (click)="sendInfo()">Select Player</button>
    <hr />
    `

})
export class DisplayComponent {
    @Input('name') pName;
    @Input('city') pCity;
    @Input('salary') pSalary;
    @Output() sendPlayerInfo: EventEmitter<any> = new EventEmitter();

    public sendInfo(): void {
        let selectedPlayerObj: any = {
                selectedName: this.pName,
                selectedCity: this.pCity,
                selectedSalary: this.pSalary
        };
        this.sendPlayerInfo.emit(selectedPlayerObj);
    }

}