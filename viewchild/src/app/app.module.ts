import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChildaComponent } from './views/childa.component';
import { HoverDirective } from './custom-directives/hover-directive';
import { ChildbComponent } from './views/childb.component';




@NgModule({
  declarations: [
    AppComponent,
    ChildaComponent,
    HoverDirective,
    ChildbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
