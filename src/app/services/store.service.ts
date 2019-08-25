import { Injectable } from '@angular/core';
import { IPagination } from '../models/models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StoreService {
  public changeCountry$: BehaviorSubject<string> = new BehaviorSubject(null);
  public changeCategory$: Subject<string> = new Subject();
  public changePage$: Subject<IPagination> = new Subject();
  public handleEmptySearch$: BehaviorSubject<boolean> = new BehaviorSubject(true);
}
