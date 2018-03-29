import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `<div>
    <h1>Android IDE Type: {{androidType}}</h1>
    </div>
    
    `
})
export class AndroidTypeComponent{
    private androidType:any;
    private observerRef:any;
constructor(route:ActivatedRoute){
//this.androidType = route.snapshot.params['ideName'];
this.observerRef = route.params.subscribe(params=>{this.androidType=params['ideName']});
}

ngOnDestroy(){
    this.observerRef.unsubscribe();
}

    
}