import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.http.service';
import { HoverDirective } from '../custom-directives/hover-directive';

@Component({
    selector: 'countries-component',
    template: `
    <table align="center" border="1" cellpadding="5" cellspacing="0" borderColor="#ccc">
    <thead style="background-color:yellow">
    <th>Country</th>
    <th>Capital</th>
    <th>Currency</th>
    <th>Flag</th>
    </thead>
    <tbody style="background-color:white">
    <tr [customHover]="'pink'" *ngFor ="let country of countries">
    <td>{{country.name | charcount}}</td>
    <td>{{country.capital}}</td>
    <td>{{country.currencies[0].code}}</td>
    <td><img width="100" height="50" src="{{country.flag}}"></td>
    </tr>
    </tbody>
    </table>
    `,
    providers: [CountriesService]
})
export class CountriesComponent implements OnInit {
    public countries: any;

    constructor( private countriesService: CountriesService ) {

    }
ngOnInit() {
    this.countriesService.getCountries().subscribe( res => this.countries = res.json());
}


}