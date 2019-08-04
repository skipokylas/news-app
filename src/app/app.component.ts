import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from './services/article.service';
import { MediaQueryHelper } from './shared/helpers/media-query.helper';
import { IArticle } from './models/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  articles: IArticle[];
  fillerNav = ['test1', 'test2'];
  mobileQuery: MediaQueryList;

  constructor(
    private articleService: ArticleService,
    private mediaQueryHelper: MediaQueryHelper,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.articleService.getTopHeadlinesByCurrentCountry().subscribe((data: any) => (this.articles = data.articles));
    this.mobileQuery = this.mediaQueryHelper.getMobileQuery(this.changeDetectorRef);
  }

  ngOnDestroy() {
    this.mediaQueryHelper.removeMobileQueryEventListener();
  }
}
