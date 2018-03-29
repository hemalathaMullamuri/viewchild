import { NgModule } from '@angular/core';
import { LazyComponent } from '../custom-component/lazy.component';


@NgModule({
    declarations: [LazyComponent],
    exports:[LazyComponent]
})
export class LazyModule {}