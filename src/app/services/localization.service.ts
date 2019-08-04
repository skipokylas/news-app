import { Injectable } from '@angular/core';
import { ILocalization } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LocalizationService {
  private BASE_URL = 'https://ipapi.co/json';

  constructor(private http: HttpClient) {}

  public getLocalization(): Observable<ILocalization> {
    return this.http.get<ILocalization>(`${this.BASE_URL}`);
  }
}
