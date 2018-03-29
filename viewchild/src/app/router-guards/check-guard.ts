import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad } from '@angular/router';
import { DetailComponent} from '../custom-component/details.component';


@Injectable()
export class CheckGuard implements CanActivate, CanActivateChild, CanDeactivate<DetailComponent>, CanLoad {

    canActivate(): boolean {
        return confirm('Are you enrolled for Java course?');
    }

    canActivateChild(): boolean{
        return confirm('Are you enrolled for Java swing and spring');
    }

    canDeactivate(template: DetailComponent): boolean {
        return confirm("Are you sure you want to navigate from this page?");
    }

    canLoad(): boolean {
        return confirm('Do you want to load countries details?')
    }

}