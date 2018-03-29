import { Component, ElementRef } from '@angular/core';

@Component({
selector:'child1',
template: `
<div id="openModal" class="modalDialog">
	<div>
		<div (click)="closeModal()" title="Close" class="close">X</div>
		<h2>{{ title }}</h2>
		<p>{{ content1 }}</p>
		<p>{{ content2 }}</p>
	</div>
</div>
`,
styles:[`
.modalDialog {
	position: fixed;
	font-family: Arial, Helvetica, sans-serif;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.8);
	z-index: 99999;
	opacity:0;
	-webkit-transition: opacity 400ms ease-in;
	-moz-transition: opacity 400ms ease-in;
	transition: opacity 400ms ease-in;
	pointer-events: none;
}
.modalDialog:target {
	opacity:1;
	pointer-events: auto;
}

.modalDialogShow {
	opacity:1;
	pointer-events: auto;
}

.modalDialog > div {
	width: 400px;
	position: relative;
	margin: 10% auto;
	padding: 5px 20px 13px 20px;
	border-radius: 10px;
	background: #fff;
	background: -moz-linear-gradient(#fff, #999);
	background: -webkit-linear-gradient(#fff, #999);
	background: -o-linear-gradient(#fff, #999);
}
.close {
	background: #606061;
	color: #FFFFFF;
	line-height: 25px;
	position: absolute;
	right: -12px;
	text-align: center;
	top: -10px;
	width: 24px;
	text-decoration: none;
	font-weight: bold;
	-webkit-border-radius: 12px;
	-moz-border-radius: 12px;
	border-radius: 12px;
	-moz-box-shadow: 1px 1px 3px #000;
	-webkit-box-shadow: 1px 1px 3px #000;
	box-shadow: 1px 1px 3px #000;
	cursor:pointer;
}

.close:hover { background: #00d9ff; }

`]
})
export class Child1 {
    public title: string = 'Model Title';
	public content1: string = 'This is a sample modal box that can be created using the powers of CSS3.';
	public content2: string = 'You could do a lot of things here like have a pop-up ad that shows when your website loads, or create a login/register form for users.';
	constructor( private elem: ElementRef ) {

	}

public openModal(): void {
   // this.showModal = true;
this.elem.nativeElement.querySelector('#openModal').classList.add('modalDialogShow');
}

public closeModal(): void {
   // this.showModal = false;
   this.elem.nativeElement.querySelector('#openModal').classList.remove('modalDialogShow');
}


}