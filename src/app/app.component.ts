import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from './services/article.service';
import { Categories } from './models/categories';
import { MediaQueryHelper } from './shared/helpers/media-query.helper';
import { IArticle, IArticleResponse, TCategories } from './models/models';
import { Observable } from 'rxjs';
import { CountryService } from './services/country.service';
import { take } from 'rxjs/operators';
import { StoreService } from './services/store.service';

const pageSize = 40;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  articles: IArticle[];
  categories = Categories;
  mobileQuery: MediaQueryList;
  currentCuntry$: Observable<string>;

  constructor(
    private articleService: ArticleService,
    private mediaQueryHelper: MediaQueryHelper,
    private changeDetectorRef: ChangeDetectorRef,
    private countryService: CountryService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.countryService
      .getCountry()
      .pipe(take(1))
      .subscribe((country: any) => this.store.changeCountry$.next(country));

    this.store.changeCountry$.subscribe(country => {
      this.articleService
        .getTopHeadlines({ country, pageSize })
        .pipe(take(1))
        .subscribe((data: IArticleResponse) => {
          this.articles = data.articles;
        });
    });

    this.store.changeCategory$.subscribe((category: TCategories) => {
      this.articleService
        .getTopHeadlines({ country: this.store.changeCountry$.value, category, pageSize })
        .pipe(take(1))
        .subscribe((data: IArticleResponse) => {
          this.articles = data.articles;
        });
    });

    this.mobileQuery = this.mediaQueryHelper.getMobileQuery(this.changeDetectorRef);
  }

  ngOnDestroy() {
    this.mediaQueryHelper.removeMobileQueryEventListener();
  }

  changeCategory(category) {
    this.store.changeCategory$.next(category);
    console.log(category);
  }
}
