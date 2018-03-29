import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
    <form>
    Enter First Name: <input type="text" name="fName"> <br />
    Enter Last Name: <input type="text" name="fName"> <br />
    <button (click)="gotoHome()">Home</button>
    </form>
    `
})
export class DetailComponent{
    constructor( private router: Router ) {

    }
public gotoHome(): void {
this.router.navigate(['/home']);
}
}