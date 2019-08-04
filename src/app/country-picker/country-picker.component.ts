import { Component, OnInit } from '@angular/core';
import { Countries } from '../models/countries.enum';

@Component({
  selector: 'app-country-picker',
  templateUrl: './country-picker.component.html',
  styleUrls: ['./country-picker.component.scss']
})
export class CountryPickerComponent implements OnInit {
  countries = Object.keys(Countries);

  constructor() {}

  ngOnInit() {}

  selectCountry(country) {
    console.log(Countries[country]);
  }
}
