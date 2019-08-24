import { Component, Input } from '@angular/core';
import { IArticle } from '../models/models';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  constructor(private dialogService: DialogService) {}
  @Input() articles: IArticle[];

  openArticle(url: string) {
    this.dialogService.openDialog({ url });
  }
}
