import { Injectable } from '@angular/core'
import { CanActivate,CanActivateChild, CanDeactivate, CanLoad } from '@angular/router';
import { DetailComponent } from '../custom-component/details.component';

@Injectable()
export class GuardCheck implements CanActivate, CanActivateChild, CanDeactivate<DetailComponent>, CanLoad {

    canActivate(): boolean {
        return confirm('Are you enrolled for Java?');
    }

    canActivateChild(): boolean {
        return confirm('Are you enrolled for Java frameworks');
    }

    canDeactivate ( target: DetailComponent ): boolean {
        return confirm('You may have unsaved changes?');

    }

    canLoad(): boolean {
 return confirm('do you want to load countries?');
    }

}