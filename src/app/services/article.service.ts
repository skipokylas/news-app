import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITopHeadlinesParams, IArticleResponse } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private TOP_HEADLINES = 'https://newsapi.org/v2/top-headlines';
  private EVERYTHING = 'https://newsapi.org/v2/everything';
  private newsApiKey = '7c0c987bdf7d4d8fb61d66241baa6368';

  constructor(private http: HttpClient) {}

  public getTopHeadlines(params: ITopHeadlinesParams = {}): Observable<IArticleResponse> {
    return this.http.get<IArticleResponse>(`${this.TOP_HEADLINES}`, {
      params: Object.assign({ apiKey: this.newsApiKey }, params)
    });
  }

  public getEverything(params: ITopHeadlinesParams = {}): Observable<IArticleResponse> {
    return this.http.get<IArticleResponse>(`${this.EVERYTHING}`, {
      params: Object.assign({ apiKey: this.newsApiKey }, params)
    });
  }
}
