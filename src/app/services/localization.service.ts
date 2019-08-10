import { Injectable } from '@angular/core';
import { ILocalization, ICountry } from '../models/models';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-starage.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LocalizationService {
  private BASE_URL = 'https://ipapi.co/json';

  constructor(private http: HttpClient, private ls: LocalStorageService) {}

  public currentCountrySub$: BehaviorSubject<string> = new BehaviorSubject('UA');

  public getLocalization(): Observable<ILocalization> {
    return this.http.get<ILocalization>(`${this.BASE_URL}`);
  }

  public getCountry(): Observable<string> {
    const country = this.ls.get('country');
    if (!!country) {
      return of(country);
    } else {
      this.getLocalization().pipe(
        map((localization: ILocalization) => {
          this.ls.set('country', localization.country);
          return localization.country;
        })
      );
    }
  }
}
