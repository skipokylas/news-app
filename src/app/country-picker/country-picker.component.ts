import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Countries } from '../models/countries';
import { LocalStorageService } from '../services/local-starage.service';
import { Observable } from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-country-picker',
  templateUrl: './country-picker.component.html',
  styleUrls: ['./country-picker.component.scss']
})
export class CountryPickerComponent implements OnInit {
  countries = Object.values(Countries);
  currentCountry$: Observable<string>;
  currentCountry: string;

  constructor(private ls: LocalStorageService, private store: StoreService) {}

  ngOnInit() {
    this.currentCountry$ = this.store.changeCountry$.pipe(
      filter(countryShort => !!countryShort),
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
    this.store.changeCountry$.next(isoCountry);
  }
}
