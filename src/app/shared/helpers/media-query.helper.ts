import { Injectable, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Injectable({ providedIn: 'root' })
export class MediaQueryHelper {
  private mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(private media: MediaMatcher) {}

  getMobileQuery(changeDetectorRef: ChangeDetectorRef): MediaQueryList {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    return this.mobileQuery;
  }

  removeMobileQueryEventListener() {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
}
