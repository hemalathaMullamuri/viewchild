import { Component } from '@angular/core';

@Component({
    selector: 'child-b',
    template:
  `  <h3>{{msgTitle}}</h3>
        <h4 style="color:red">{{msg}}</h4>
    `
})
export class ChildbComponent{
    public msgTitle: string = 'Default Title';
    public msg: string = 'Default String';
}