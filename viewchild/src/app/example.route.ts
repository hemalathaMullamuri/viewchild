import { Routes , RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { EagerComponent } from './eager.component';
//import { CountriesComponent } from './custom-component/countries-component';

const routes: Routes =[
    {path:'eager', component: EagerComponent},
   {path: 'Lazy', loadChildren: './custom-modules/countries.module'}   
];

export const countryRouting: ModuleWithProviders = RouterModule.forRoot(routes);