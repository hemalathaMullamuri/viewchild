import {Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountriesService {
    constructor(private _http: Http ) {}

   public getCountryDetail( countryName: string) {
      // 'https://restcountries.eu/rest/v2/name/india?fullText=true';
       let _url: string = 'https://restcountries.eu/rest/v2/name/'+countryName+'?fullText=true';
        return this._http.get( _url );
    }

      public getAllCountries() {
       let _url: string = 'https://restcountries.eu/rest/v2/all';
        return this._http.get( _url );
    }
}