import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IArticle, ITopHeadlinesParams, ILocalization } from '../models/models';
import { LocalizationService } from './localization.service';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private BASE_URL = 'https://newsapi.org/v2/top-headlines';
  private newsApiKey = '7c0c987bdf7d4d8fb61d66241baa6368';

  constructor(private http: HttpClient, private localizationService: LocalizationService) {}

  public getTopHeadlines(params: ITopHeadlinesParams = {}): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(`${this.BASE_URL}`, {
      params: Object.assign({ apiKey: this.newsApiKey }, params)
    });
  }

  public getEverything(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>('');
  }

  public getTopHeadlinesByCurrentCountry(): Observable<IArticle[]> {
    return this.localizationService.getLocalization().pipe(
      switchMap((localization: ILocalization) => {
        return this.getTopHeadlines({ country: localization.country.toLocaleLowerCase() });
      })
    );
  }
}
