import { Injectable, ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITopHeadlinesParams, IArticleResponse, IArticle, TCategories, IPagination } from '../models/models';
import { switchMap, first, map, skip, filter, catchError } from 'rxjs/operators';
import { StoreService } from './store.service';
import { SearchService } from './search.service';
import { PaginationService } from './pagination.service';

const pageSize = 30;
@Injectable({ providedIn: 'root' })
export class ArticleService {
  private TOP_HEADLINES = 'https://newsapi.org/v2/top-headlines';
  private EVERYTHING = 'https://newsapi.org/v2/everything';
  private newsApiKey = '7c0c987bdf7d4d8fb61d66241baa6368';

  constructor(
    private http: HttpClient,
    private store: StoreService,
    private searchService: SearchService,
    private paginationService: PaginationService
  ) {}

  private getTopHeadlines(params: ITopHeadlinesParams = {}): Observable<IArticleResponse> {
    return this.http.get<IArticleResponse>(`${this.TOP_HEADLINES}`, {
      params: Object.assign({ apiKey: this.newsApiKey }, params)
    });
  }

  private getEverything(params: ITopHeadlinesParams = {}): Observable<IArticleResponse> {
    return this.http.get<IArticleResponse>(`${this.EVERYTHING}`, {
      params: Object.assign({ apiKey: this.newsApiKey }, params)
    });
  }

  public getArticlesByCountry(): Observable<IArticle[]> {
    return this.store.changeCountry$.pipe(
      switchMap((country: string) =>
        this.getTopHeadlines({ country, pageSize }).pipe(
          first(),
          map((data: IArticleResponse): IArticle[] => {
            this.paginationService.length = data.totalResults;
            return data.articles;
          })
        )
      )
    );
  }

  public getArticlesByCategory(): Observable<IArticle[]> {
    return this.store.changeCategory$.pipe(
      switchMap((category: TCategories) =>
        this.getTopHeadlines({ country: this.store.changeCountry$.value, category, pageSize }).pipe(
          first(),
          map((data: IArticleResponse): IArticle[] => data.articles)
        )
      )
    );
  }

  public getArticlesBySearch(inputRef: ElementRef): Observable<IArticle[]> {
    return this.searchService.getInputValue(inputRef).pipe(
      switchMap((value: string) =>
        this.getEverything({ q: value, pageSize }).pipe(
          map((data: IArticleResponse): IArticle[] => {
            this.paginationService.length = data.totalResults;
            return data.articles;
          })
        )
      )
    );
  }

  public getArticlesWhenInputIsEmpty(): Observable<IArticle[]> {
    return this.store.handleEmptySearch$.pipe(
      filter((isInputClear: boolean) => isInputClear),
      skip(1),
      switchMap(() =>
        this.getTopHeadlines({ country: this.store.changeCountry$.value }).pipe(
          map((data: IArticleResponse): IArticle[] => data.articles)
        )
      )
    );
  }

  public getArticlesByPage(inputRef: ElementRef): Observable<IArticle[]> {
    return this.store.changePage$.pipe(
      switchMap((event: IPagination) =>
        this.getEverything({
          page: event.pageIndex + 1,
          pageSize: event.pageSize,
          q: inputRef.nativeElement.value
        }).pipe(
          map((data: IArticleResponse): IArticle[] => data.articles),
          catchError(() => of(null))
        )
      )
    );
  }
}
