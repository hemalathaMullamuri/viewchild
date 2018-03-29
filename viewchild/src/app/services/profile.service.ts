import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProfileService {

    constructor( private _http: Http){

    }

    saveProfile() {
        let _url: string = 'https://reqres.in/api/users';
        return this._http.post(_url, {name: 'Junaid', job: 'Programmer', city: 'Mumbai'})
        .map((res:Response) => res.json())
        .catch(this._errorHandler) ;
    }

    private _errorHandler(error: Response) {
        console.error('Error Occured: ' + error);
        return Observable.throw(error || 'Some Error on Server Occured');


    }
}