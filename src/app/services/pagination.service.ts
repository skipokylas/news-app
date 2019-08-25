import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PaginationService {
  private _length = 100;
  private _pageSizeOptions: number[] = [30, 10];
  private _pageSize: 10;

  get length(): number {
    return this._length;
  }

  set length(newLength: number) {
    this._length = newLength;
  }

  get pageSizeOptions(): number[] {
    return this._pageSizeOptions;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(newPageSize: number) {
    this._length = newPageSize;
  }
}
