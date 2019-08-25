import { Injectable, ElementRef } from '@angular/core';
import { Observable, fromEvent, merge } from 'rxjs';
import { map, filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { StoreService } from './store.service';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private storeService: StoreService) {}

  getInputValue(inputRef: ElementRef): Observable<string> {
    const fromClick$ = fromEvent(inputRef.nativeElement, 'click');
    const fromKeyUp$ = fromEvent(inputRef.nativeElement, 'keyup');
    const merged$ = merge(fromClick$, fromKeyUp$);

    return merged$.pipe(
      debounceTime(1000),
      map((value: Event) => (value.target as HTMLTextAreaElement).value),
      distinctUntilChanged(),
      filter(value => {
        const isValidValue = !!value && !!value.trim();
        this.handleEmptyValue(!value);
        return isValidValue;
      })
    );
  }

  private handleEmptyValue(isEmpty: boolean): void {
    this.storeService.handleEmptySearch$.next(isEmpty);
  }
}
