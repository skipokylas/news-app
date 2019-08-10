import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from './services/article.service';
import { MediaQueryHelper } from './shared/helpers/media-query.helper';
import { IArticle, IArticleResponse } from './models/models';
import { Observable } from 'rxjs';
import { LocalizationService } from './services/localization.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  articles: IArticle[];
  fillerNav = ['test1', 'test2'];
  mobileQuery: MediaQueryList;
  currentCuntry$: Observable<string>;

  constructor(
    private articleService: ArticleService,
    private mediaQueryHelper: MediaQueryHelper,
    private changeDetectorRef: ChangeDetectorRef,
    private localizationService: LocalizationService
  ) {}

  ngOnInit() {
    this.localizationService
      .getCountry()
      .pipe(take(1))
      .subscribe((country: any) => this.localizationService.currentCountrySub$.next(country));

    this.mobileQuery = this.mediaQueryHelper.getMobileQuery(this.changeDetectorRef);
    this.localizationService.currentCountrySub$.subscribe(country => {
      this.articleService
        .getTopHeadlines({ country })
        .pipe(take(1))
        .subscribe((data: IArticleResponse) => (this.articles = data.articles));
    });
  }

  ngOnDestroy() {
    this.mediaQueryHelper.removeMobileQueryEventListener();
  }
}
