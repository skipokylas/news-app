import { Injectable } from '@angular/core';
import { ILocalization, ICountry } from '../models/models';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-starage.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StoreService {
  constructor(private http: HttpClient, private ls: LocalStorageService) {}

  public changeCountry$: BehaviorSubject<string> = new BehaviorSubject(null);
  public changeCategory$: Subject<string> = new Subject();
}
