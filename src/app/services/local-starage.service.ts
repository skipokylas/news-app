import { Injectable } from '@angular/core';
import { ILocalization } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor(private http: HttpClient) {}

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
