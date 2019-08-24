import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ArticleComponent } from '../article/article.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(data): void {
    const dialogRef = this.dialog.open(ArticleComponent, {
      panelClass: 'full-width-dialog',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'dialog closed');
    });
  }
}
