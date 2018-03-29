import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class CountriesService {
    constructor(private _http: Http) {

    }

    public getCountryDetail(countryName: string ) {
        let _url: string = 'https://restcountries.eu/rest/v2/name/'+countryName+'?fullText=true';
        return this._http.get( _url );
    }

    public getCountries() {
        let _url: string = 'https://restcountries.eu/rest/v2/all';
        return this._http.get( _url );
    }
}