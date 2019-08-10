import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IArticle, ITopHeadlinesParams, ILocalization, IArticleResponse } from '../models/models';
import { LocalizationService } from './localization.service';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private BASE_URL = 'https://newsapi.org/v2/top-headlines';
  private newsApiKey = '7c0c987bdf7d4d8fb61d66241baa6368';

  constructor(private http: HttpClient, private localizationService: LocalizationService) {}

  public getTopHeadlines(params: ITopHeadlinesParams = {}): Observable<IArticleResponse> {
    return this.http.get<IArticleResponse>(`${this.BASE_URL}`, {
      params: Object.assign({ apiKey: this.newsApiKey }, params)
    });
  }

  public getEverything(): Observable<IArticleResponse> {
    return this.http.get<IArticleResponse>('');
  }
}
