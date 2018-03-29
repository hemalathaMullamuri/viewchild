import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ChildaComponent } from './views/childa.component';
import { HoverDirective } from './custom-directives/hover-directive';
import { ChildbComponent } from './views/childb.component';


@Component({
  selector: 'my-own',
  templateUrl:'./app.component.html'
})
export class AppComponent implements AfterViewInit  {
@ViewChild(ChildaComponent) 
private childa: ChildaComponent;
@ViewChild(HoverDirective)
private hoverDirective: HoverDirective;

@ViewChildren(ChildbComponent)
private childb:QueryList<ChildbComponent>;

private childbArray: Array<ChildbComponent>; 

@ViewChild('fName')
private elemFName:ElementRef;

@ViewChild('lName')
private elemLName:ElementRef;

private msgArray: Array<string>=[
  "Message for child 1", "Message for Child 2", "Message for child 3", "Message for child 4"
]

public selectorColor: string;
public childIndex: number = 0;

public title: string = 'Angular ViewChild and ViewChildern Demo';

public sendMsg(): void {
  this.childa.msgTitle = 'Child A title from parent';
  this.childa.msg = 'Message from parent to child a';
  this.hoverDirective.customHover = this.selectorColor;
}

public sendMessageToChildB(): void {
  this.childbArray[this.childIndex].msgTitle= 'Title set by Parent';
  this.childbArray[this.childIndex].msg = this.msgArray[this.childIndex];
}

ngAfterViewInit(): void {
  this.elemFName.nativeElement.style.backgroundColor = 'green';
    this.elemFName.nativeElement.style.color = 'red';

     this.elemLName.nativeElement.style.backgroundColor = 'silver';
    this.elemLName.nativeElement.style.color = 'blue';
this.childbArray = this.childb.toArray(); 
}

}
