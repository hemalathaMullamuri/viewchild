import { Routes} from '@angular/router';
import { HomeComponent } from './views/home.component';

import { JavaComponent } from './views/java.component';
import { JavaSwingComponent } from './views/java.swing.component';
import { JavaSpringComponent } from './views/java.spring.component';

import { AndroidComponent } from './views/android.component';
import { AndroidIDEComponent } from './views/android.ide.component';
import { CheckGuard } from './router-guards/check-guard';
import { DetailComponent } from './custom-component/details.component';

export const approutes :Routes =[
     {path:'home', component:HomeComponent},
     {path:'details', component:DetailComponent, canDeactivate: [CheckGuard]},
      {path: 'Lazy', loadChildren: './custom-modules/countries.module', canLoad: [CheckGuard]} ,
     {path:'java', component:JavaComponent,canActivate: [CheckGuard],
     canActivateChild: [CheckGuard],
children:[
    {path:'swing', component:JavaSwingComponent},
    {path:'spring', component:JavaSpringComponent}
]    
},
      {path:'android', component:AndroidComponent, 
      children:[
          {path:'type/:ideSelected', component: AndroidIDEComponent}
          ]
}
]