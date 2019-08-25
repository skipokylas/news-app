import { Component, ChangeDetectorRef, OnInit, OnDestroy, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ArticleService } from './services/article.service';
import { Categories } from './models/categories';
import { MediaQueryHelper } from './shared/helpers/media-query.helper';
import { IArticle, IPagination } from './models/models';
import { Observable } from 'rxjs';
import { CountryService } from './services/country.service';
import { first } from 'rxjs/operators';
import { merge } from 'rxjs';
import { StoreService } from './services/store.service';
import { SearchComponent } from './search/search.component';
import { PaginationService } from './services/pagination.service';

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
  articles$: Observable<IArticle[]>;

  constructor(
    private articleService: ArticleService,
    private mediaQueryHelper: MediaQueryHelper,
    private changeDetectorRef: ChangeDetectorRef,
    private countryService: CountryService,
    private store: StoreService,
    protected paginationService: PaginationService
  ) {}

  ngOnInit() {
    this.countryService
      .getCountry()
      .pipe(first())
      .subscribe((country: any) => this.store.changeCountry$.next(country));

    this.mobileQuery = this.mediaQueryHelper.getMobileQuery(this.changeDetectorRef);
    this.isInputEmpty$ = this.store.handleEmptySearch$;
  }

  ngAfterViewInit() {
    this.articles$ = merge(
      this.articleService.getArticlesByCountry(),
      this.articleService.getArticlesByPage(this.searchInput.first.searchInput),
      this.articleService.getArticlesByCategory(),
      this.articleService.getArticlesWhenInputIsEmpty(),
      this.articleService.getArticlesBySearch(this.searchInput.first.searchInput)
    );
  }

  ngOnDestroy() {
    this.mediaQueryHelper.removeMobileQueryEventListener();
  }

  changeCategory(category: string): void {
    this.store.changeCategory$.next(category);
  }

  changePage(event: IPagination): void {
    this.store.changePage$.next(event);
  }
}
