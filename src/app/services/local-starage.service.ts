import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  public get(key: string): string {
    return localStorage.getItem(key);
  }

  public set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }
}
