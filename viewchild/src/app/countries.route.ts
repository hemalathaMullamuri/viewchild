import { Routes , RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CheckGuard } from './router-guards/check-guard';

//import { EagerComponent } from './eager.component';

const routes: Routes =[
  /*  {path:'eager', component: EagerComponent},*/
   {path: 'Lazy', loadChildren: './custom-modules/countries.module', canLoad: [CheckGuard]}   
];

export const countryRouting: ModuleWithProviders = RouterModule.forRoot(routes);