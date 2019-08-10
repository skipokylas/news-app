import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Countries } from '../models/countries';
import { LocalizationService } from '../services/localization.service';
import { LocalStorageService } from '../services/local-starage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country-picker',
  templateUrl: './country-picker.component.html',
  styleUrls: ['./country-picker.component.scss']
})
export class CountryPickerComponent implements OnInit {
  countries = Object.values(Countries);
  currentCountry$: Observable<string>;
  currentCountry: string;

  constructor(private localizationService: LocalizationService, private ls: LocalStorageService) {}

  ngOnInit() {
    this.currentCountry$ = this.localizationService.currentCountrySub$.pipe(
      map((countryShort: string): string => Countries[countryShort].name)
    );
  }

  selectCountry(country) {
    const isoCountry = (() => {
      for (const key in Countries) {
        if (Countries[key].name === country) {
          return key;
        }
      }
    })();

    this.ls.set('country', isoCountry);
    this.localizationService.currentCountrySub$.next(isoCountry);
  }
}
