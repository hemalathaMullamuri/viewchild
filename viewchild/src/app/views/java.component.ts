import { Component } from '@angular/core';

@Component({
    template: `<div style="width:350px;height:200px;background-color:#00ff00">
    <h1>This is Java Page</h1>
    <a [routerLink]="['swing']">Swing</a>
    <br />
     <a [routerLink]="['spring']">Spring</a>
     <div>
     <router-outlet></router-outlet>
     </div>
    `
})
export class JavaComponent{}