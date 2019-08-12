import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule, MatSidenavModule, MatMenuModule, MatSelectModule, MatCardModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { CountryPickerComponent } from './country-picker/country-picker.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, SidenavContentComponent, ArticleListComponent, CountryPickerComponent, SearchComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    LayoutModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
