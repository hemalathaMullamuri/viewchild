import { NgModule } from '@angular/core';
import { CountriesComponent } from '../custom-component/countries-component';
import { HoverDirective } from '../custom-directives/hover-directive';
import { CharCountPipe } from '../custom-pipes/countres.charcount.pipes';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

const countriesRoutes: Routes = [
    {path: '', redirectTo: 'country', pathMatch: 'full'},
    {path: 'country', component: CountriesComponent}
];

@NgModule({
    declarations: [
        CountriesComponent,
        HoverDirective,
        CharCountPipe
    ],
    imports: [CommonModule, 
    RouterModule.forChild( countriesRoutes)
    ]
    ,
    providers: [],
    exports: [CountriesComponent]

})
export default class CountriesModule {}