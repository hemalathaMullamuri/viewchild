import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    template:`
    <h1>Android IDE selected: {{selectedIDE}} </h1> 
    `
})
export class AndroidIDEComponent{
    public selectedIDE: string;
    private observerRef: any;

    constructor(private route:ActivatedRoute){
      //  this.selectedIDE = route.snapshot.params['ideSelected'];
     


    }

    ngOnInit(){
         this.observerRef = this.route.params.subscribe(params=>{
          this.selectedIDE = params['ideSelected'];
      });
    }
      ngOnDestroy(){
            this.observerRef.unsubscribe();
      }
}