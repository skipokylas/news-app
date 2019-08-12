import { Component, ChangeDetectorRef, OnInit, OnDestroy, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ArticleService } from './services/article.service';
import { Categories } from './models/categories';
import { MediaQueryHelper } from './shared/helpers/media-query.helper';
import { IArticle, IArticleResponse, TCategories } from './models/models';
import { Observable } from 'rxjs';
import { CountryService } from './services/country.service';
import { switchMap, filter, skip, first, map } from 'rxjs/operators';
import { merge } from 'rxjs';
import { StoreService } from './services/store.service';
import { SearchService } from './services/search.service';
import { SearchComponent } from './search/search.component';

const pageSize = 40;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren(SearchComponent) searchInput: QueryList<SearchComponent>;

  articles: IArticle[];
  categories = Categories;
  mobileQuery: MediaQueryList;
  isInputEmpty$: Observable<boolean>;
  articlesByCountry$: Observable<IArticle[]>;
  articlesByCategory$: Observable<IArticle[]>;
  articlesBySearch$: Observable<IArticle[]>;
  articlesWhenInputIsEmpty$: Observable<IArticle[]>;
  articles$: Observable<IArticle[]>;

  constructor(
    private articleService: ArticleService,
    private mediaQueryHelper: MediaQueryHelper,
    private changeDetectorRef: ChangeDetectorRef,
    private countryService: CountryService,
    private store: StoreService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.countryService
      .getCountry()
      .pipe(first())
      .subscribe((country: any) => this.store.changeCountry$.next(country));

    this.articlesByCountry$ = this.store.changeCountry$.pipe(
      switchMap((country: string) =>
        this.articleService.getTopHeadlines({ country, pageSize }).pipe(
          first(),
          map((data: IArticleResponse): IArticle[] => data.articles)
        )
      )
    );

    this.articlesByCategory$ = this.store.changeCategory$.pipe(
      switchMap((category: TCategories) =>
        this.articleService.getTopHeadlines({ country: this.store.changeCountry$.value, category, pageSize }).pipe(
          first(),
          map((data: IArticleResponse): IArticle[] => data.articles)
        )
      )
    );

    this.mobileQuery = this.mediaQueryHelper.getMobileQuery(this.changeDetectorRef);
    this.isInputEmpty$ = this.store.handleEmptySearch$;

    this.articlesWhenInputIsEmpty$ = this.isInputEmpty$.pipe(
      filter((isInputClear: boolean) => isInputClear),
      skip(1),
      switchMap(() =>
        this.articleService
          .getTopHeadlines({ country: this.store.changeCountry$.value })
          .pipe(map((data: IArticleResponse): IArticle[] => data.articles))
      )
    );
  }

  ngAfterViewInit() {
    this.articlesBySearch$ = this.searchService
      .getInputValue(this.searchInput.first.searchInput)
      .pipe(
        switchMap((value: string) =>
          this.articleService
            .getEverything({ q: value, pageSize })
            .pipe(map((data: IArticleResponse): IArticle[] => data.articles))
        )
      );

    this.articles$ = merge(
      this.articlesByCountry$,
      this.articlesByCategory$,
      this.articlesWhenInputIsEmpty$,
      this.articlesBySearch$
    );
  }

  ngOnDestroy() {
    this.mediaQueryHelper.removeMobileQueryEventListener();
  }

  changeCategory(category) {
    this.store.changeCategory$.next(category);
  }
}
