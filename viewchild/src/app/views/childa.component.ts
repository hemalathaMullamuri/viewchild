import { Component } from '@angular/core';

@Component({
    selector: 'child-a',
    template:
  `  <h3>{{msgTitle}}</h3>
        <h4><marquee>{{msg}}</marquee></h4>
    `
})
export class ChildaComponent{
    public msgTitle: string = 'Default Title';
    public msg: string = 'Default String';
}