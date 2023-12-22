(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\" [ngClass]=\"{\n    'hidden': !(isInputEmpty$ | async),\n    'visible': (isInputEmpty$ | async)\n    }\">\n      <mat-icon>menu</mat-icon>\n\n    </button>\n    <h1 class=\"example-app-name\">News App</h1>\n\n    <app-search class=\"search-container\"></app-search>\n\n    <span class=\"example-fill-remaining-space\"></span>\n\n    <app-country-picker [ngClass]=\"{'hidden': !(isInputEmpty$ | async), 'visible': (isInputEmpty$ | async)}\"></app-country-picker>\n\n  </mat-toolbar>\n\n  <div class=\"paginator-container\">\n    <mat-paginator [length]=\"paginationService.length\" [pageSize]=\"paginationService.pageSize\" [pageSizeOptions]=\"paginationService.pageSizeOptions\" (page)=\"changePage($event)\" [ngClass]=\"{\n      'visible': !(isInputEmpty$ | async),\n      'hidden': (isInputEmpty$ | async)\n     }\"></mat-paginator>\n  </div>\n\n  <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\".\" *ngFor=\"let category of categories\" (click)=\"changeCategory(category)\">{{category}}</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <app-sidenav-content [articles]=\"articles$ | async\"></app-sidenav-content>\n    </mat-sidenav-content>\n\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/article-list/article-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/article-list/article-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-wrapper\">\n    <div class=\"article-list\" *ngIf=\"articles; else spiner\">\n        <mat-card class=\"card\" *ngFor=\"let article of articles\" (click)=\"openArticle(article.url)\">\n            <mat-card-header>\n                <mat-card-subtitle>{{article.source.name}}</mat-card-subtitle>\n            </mat-card-header>\n            <div class=\"img-wrapper\">\n                <img mat-card-image [src]=\"article.urlToImage\" [alt]=\"article.title\">\n            </div>\n\n            <mat-card-content>\n                <mat-card-title>{{article.title}}</mat-card-title>\n                <mat-divider></mat-divider>\n                <div class=\"card-description\">\n                    {{article.description}}\n                </div>\n                <mat-card-subtitle>{{article.publishedAt | date}}</mat-card-subtitle>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <ng-template #spiner class=\"progress-spinner-wrapper\">\n        <div class=\"progress-spinner\">\n            <mat-progress-spinner class=\"example-margin\" color=\"primary\" mode=\"indeterminate\" value=\"50\"></mat-progress-spinner>\n        </div>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/article/article.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/article/article.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sourse-btn-container\" (click)=\"redirect()\">\n    <button mat-flat-button color=\"primary\">Click to read from source</button>\n</div>\n\n<iframe [src]='sanitizer.bypassSecurityTrustResourceUrl(data.url)' onError=\"load()\" width=\"100%\" height=\"700\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/country-picker/country-picker.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/country-picker/country-picker.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n    <span>{{currentCountry$ | async}}</span>\n    <mat-icon>arrow_drop_down</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n    <button mat-menu-item *ngFor=\"let country of countries\" (click)=\"selectCountry(country.name)\">\n        <span>{{country.name}}</span>\n    </button>\n</mat-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input placeholder=\"search\" type=\"search\" #searchInput>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav-content/sidenav-content.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav-content/sidenav-content.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article-list [articles]=\"articles\"></app-article-list>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav {\n  min-width: 300px;\n  position: fixed;\n  top: 64px;\n}\n\n.mat-drawer-container {\n  margin-top: 0 !important;\n}\n\nmat-toolbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.search-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-width: 150px;\n  height: 100%;\n}\n\n.hidden {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s linear 1000ms, opacity 1000ms;\n}\n\n.visible {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0s linear 0s, opacity 1000ms;\n}\n\n.paginator-container {\n  height: 56px;\n  background: #424242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWtoYWlsb19vZHJla2hpdnNreWkvRGVza3RvcC9uZXdzLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0NGOztBRENBO0VBQ0Usd0JBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0U7bURBQUE7RUFFQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVEQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtREFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdiB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2NHB4O1xufVxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbn1cblxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMTAwMG1zLCBvcGFjaXR5IDEwMDBtcztcbn1cblxuLnZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwcywgb3BhY2l0eSAxMDAwbXM7XG59XG5cbi5wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xufVxuIiwibWF0LXNpZGVuYXYge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjRweDtcbn1cblxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbn1cblxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMTAwMG1zLCBvcGFjaXR5IDEwMDBtcztcbn1cblxuLnZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwcywgb3BhY2l0eSAxMDAwbXM7XG59XG5cbi5wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/article.service */ "./src/app/services/article.service.ts");
/* harmony import */ var _models_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/categories */ "./src/app/models/categories.ts");
/* harmony import */ var _shared_helpers_media_query_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/helpers/media-query.helper */ "./src/app/shared/helpers/media-query.helper.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _services_pagination_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/pagination.service */ "./src/app/services/pagination.service.ts");











let AppComponent = class AppComponent {
    constructor(articleService, mediaQueryHelper, changeDetectorRef, countryService, store, paginationService) {
        this.articleService = articleService;
        this.mediaQueryHelper = mediaQueryHelper;
        this.changeDetectorRef = changeDetectorRef;
        this.countryService = countryService;
        this.store = store;
        this.paginationService = paginationService;
        this.categories = _models_categories__WEBPACK_IMPORTED_MODULE_3__["Categories"];
    }
    ngOnInit() {
        this.countryService
            .getCountry()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe((country) => this.store.changeCountry$.next(country));
        this.mobileQuery = this.mediaQueryHelper.getMobileQuery(this.changeDetectorRef);
        this.isInputEmpty$ = this.store.handleEmptySearch$;
    }
    ngAfterViewInit() {
        this.articles$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.articleService.getArticlesByCountry(), this.articleService.getArticlesByPage(this.searchInput.first.searchInput), this.articleService.getArticlesByCategory(), this.articleService.getArticlesWhenInputIsEmpty(), this.articleService.getArticlesBySearch(this.searchInput.first.searchInput));
    }
    ngOnDestroy() {
        this.mediaQueryHelper.removeMobileQueryEventListener();
    }
    changeCategory(category) {
        this.store.changeCategory$.next(category);
    }
    changePage(event) {
        this.store.changePage$.next(event);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
    { type: _shared_helpers_media_query_helper__WEBPACK_IMPORTED_MODULE_4__["MediaQueryHelper"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_8__["StoreService"] },
    { type: _services_pagination_service__WEBPACK_IMPORTED_MODULE_10__["PaginationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], AppComponent.prototype, "searchInput", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"],
        _shared_helpers_media_query_helper__WEBPACK_IMPORTED_MODULE_4__["MediaQueryHelper"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"],
        _services_store_service__WEBPACK_IMPORTED_MODULE_8__["StoreService"],
        _services_pagination_service__WEBPACK_IMPORTED_MODULE_10__["PaginationService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidenav_content_sidenav_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidenav-content/sidenav-content.component */ "./src/app/sidenav-content/sidenav-content.component.ts");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _country_picker_country_picker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./country-picker/country-picker.component */ "./src/app/country-picker/country-picker.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _sidenav_content_sidenav_content_component__WEBPACK_IMPORTED_MODULE_5__["SidenavContentComponent"],
            _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_6__["ArticleListComponent"],
            _country_picker_country_picker_component__WEBPACK_IMPORTED_MODULE_11__["CountryPickerComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
            _article_article_component__WEBPACK_IMPORTED_MODULE_13__["ArticleComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]
        ],
        entryComponents: [_article_article_component__WEBPACK_IMPORTED_MODULE_13__["ArticleComponent"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/article-list/article-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/article-list/article-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article-wrapper {\n  display: flex;\n  justify-content: center;\n}\n.article-wrapper .article-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  justify-content: space-around;\n}\n.article-wrapper .article-list .card {\n  max-width: 250px;\n  margin: 20px 5px 0 5px;\n}\n.article-wrapper .article-list .card .mat-card-title {\n  overflow: hidden;\n  height: 65px;\n  font-size: 17px;\n}\n.article-wrapper .article-list .card .card-description {\n  height: 140px;\n  overflow: hidden;\n  padding: 20px 0;\n}\n.article-wrapper .article-list .card .img-wrapper {\n  width: calc(100% + 32px);\n  height: 150px;\n  overflow: hidden;\n  margin: 0 -16px 16px -16px;\n}\n.progress-spinner {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.progress-spinner-wrapper {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWtoYWlsb19vZHJla2hpdnNreWkvRGVza3RvcC9uZXdzLWFwcC9zcmMvYXBwL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FDQ0o7QURDSTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUNDTjtBRENNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NSO0FERU07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQVI7QURHTTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNEUjtBRE9BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0pGO0FET0E7RUFDRSxlQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlLWxpc3QvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5hcnRpY2xlLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgLmNhcmQge1xuICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgIG1hcmdpbjogMjBweCA1cHggMCA1cHg7XG5cbiAgICAgIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgIH1cblxuICAgICAgLmltZy13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW46IDAgLTE2cHggMTZweCAtMTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnByb2dyZXNzLXNwaW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9ncmVzcy1zcGlubmVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4iLCIuYXJ0aWNsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYXJ0aWNsZS13cmFwcGVyIC5hcnRpY2xlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5hcnRpY2xlLXdyYXBwZXIgLmFydGljbGUtbGlzdCAuY2FyZCB7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIG1hcmdpbjogMjBweCA1cHggMCA1cHg7XG59XG4uYXJ0aWNsZS13cmFwcGVyIC5hcnRpY2xlLWxpc3QgLmNhcmQgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA2NXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uYXJ0aWNsZS13cmFwcGVyIC5hcnRpY2xlLWxpc3QgLmNhcmQgLmNhcmQtZGVzY3JpcHRpb24ge1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uYXJ0aWNsZS13cmFwcGVyIC5hcnRpY2xlLWxpc3QgLmNhcmQgLmltZy13cmFwcGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgLTE2cHggMTZweCAtMTZweDtcbn1cblxuLnByb2dyZXNzLXNwaW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9ncmVzcy1zcGlubmVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/article-list/article-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-list/article-list.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");



let ArticleListComponent = class ArticleListComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    openArticle(url) {
        this.dialogService.openDialog({ url });
    }
};
ArticleListComponent.ctorParameters = () => [
    { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ArticleListComponent.prototype, "articles", void 0);
ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-list',
        template: __webpack_require__(/*! raw-loader!./article-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/article-list/article-list.component.html"),
        styles: [__webpack_require__(/*! ./article-list.component.scss */ "./src/app/article-list/article-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
], ArticleListComponent);



/***/ }),

/***/ "./src/app/article/article.component.scss":
/*!************************************************!*\
  !*** ./src/app/article/article.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sourse-btn-container {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWtoYWlsb19vZHJla2hpdnNreWkvRGVza3RvcC9uZXdzLWFwcC9zcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvdXJzZS1idG4tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIuc291cnNlLWJ0bi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let ArticleComponent = class ArticleComponent {
    constructor(dialogRef, data, sanitizer) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sanitizer = sanitizer;
    }
    redirect() {
        window.open(this.data.url, '_blank');
    }
};
ArticleComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article',
        template: __webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/index.js!./src/app/article/article.component.html"),
        styles: [__webpack_require__(/*! ./article.component.scss */ "./src/app/article/article.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], ArticleComponent);



/***/ }),

/***/ "./src/app/country-picker/country-picker.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/country-picker/country-picker.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cnktcGlja2VyL2NvdW50cnktcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/country-picker/country-picker.component.ts":
/*!************************************************************!*\
  !*** ./src/app/country-picker/country-picker.component.ts ***!
  \************************************************************/
/*! exports provided: CountryPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryPickerComponent", function() { return CountryPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/countries */ "./src/app/models/countries.ts");
/* harmony import */ var _services_local_starage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local-starage.service */ "./src/app/services/local-starage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");






let CountryPickerComponent = class CountryPickerComponent {
    constructor(ls, store) {
        this.ls = ls;
        this.store = store;
        this.countries = Object.values(_models_countries__WEBPACK_IMPORTED_MODULE_2__["Countries"]);
    }
    ngOnInit() {
        this.currentCountry$ = this.store.changeCountry$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(countryShort => !!countryShort), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((countryShort) => _models_countries__WEBPACK_IMPORTED_MODULE_2__["Countries"][countryShort].name));
    }
    selectCountry(country) {
        const isoCountry = (() => {
            for (const key in _models_countries__WEBPACK_IMPORTED_MODULE_2__["Countries"]) {
                if (_models_countries__WEBPACK_IMPORTED_MODULE_2__["Countries"][key].name === country) {
                    return key;
                }
            }
        })();
        this.ls.set('country', isoCountry);
        this.store.changeCountry$.next(isoCountry);
    }
};
CountryPickerComponent.ctorParameters = () => [
    { type: _services_local_starage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"] }
];
CountryPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-country-picker',
        template: __webpack_require__(/*! raw-loader!./country-picker.component.html */ "./node_modules/raw-loader/index.js!./src/app/country-picker/country-picker.component.html"),
        styles: [__webpack_require__(/*! ./country-picker.component.scss */ "./src/app/country-picker/country-picker.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_local_starage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _services_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"]])
], CountryPickerComponent);



/***/ }),

/***/ "./src/app/models/categories.ts":
/*!**************************************!*\
  !*** ./src/app/models/categories.ts ***!
  \**************************************/
/*! exports provided: Categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories", function() { return Categories; });
const Categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];


/***/ }),

/***/ "./src/app/models/countries.ts":
/*!*************************************!*\
  !*** ./src/app/models/countries.ts ***!
  \*************************************/
/*! exports provided: Countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
const Countries = {
    DZ: { name: 'Algeria' },
    AR: { name: 'Argentina' },
    AU: { name: 'Australia' },
    BE: { name: 'Belgium' },
    BR: { name: 'Brazil' },
    BG: { name: 'Bulgaria' },
    KH: { name: 'Cambodia' },
    CM: { name: 'Cameroon' },
    CA: { name: 'Canada' },
    CN: { name: 'China' },
    CO: { name: 'Colombia' },
    CU: { name: 'Cuba' },
    CZ: { name: 'Czech Republic' },
    EG: { name: 'Egypt' },
    SV: { name: 'Salvador' },
    FR: { name: 'France' },
    GE: { name: 'Georgia' },
    DE: { name: 'Germany' },
    GR: { name: 'Greece' },
    HK: { name: 'HongKong' },
    HU: { name: 'Hungary' },
    IN: { name: 'India' },
    ID: { name: 'Indonesia' },
    IE: { name: 'Ireland' },
    IL: { name: 'Israel' },
    IT: { name: 'Italy' },
    JP: { name: 'Japan' },
    KR: { name: 'Korea' },
    LV: { name: 'Latvia' },
    LT: { name: 'Lithuania' },
    MY: { name: 'Malaysia' },
    MX: { name: 'Mexico' },
    MA: { name: 'Morocco' },
    NL: { name: 'Netherlands' },
    NG: { name: 'Nigeria' },
    NO: { name: 'Norway' },
    PL: { name: 'Poland' },
    PT: { name: 'Portugal' },
    RO: { name: 'Romania' },
    RU: { name: 'Russian Federation' },
    SA: { name: 'Saudi Arabia' },
    RS: { name: 'Serbia' },
    SK: { name: 'Slovakia' },
    SI: { name: 'Slovenia' },
    ZA: { name: 'South Africa' },
    ES: { name: 'Spain' },
    SE: { name: 'Sweden' },
    CH: { name: 'Switzerland' },
    TW: { name: 'Taiwan' },
    TH: { name: 'Thailand' },
    TR: { name: 'Turkey' },
    UA: { name: 'Ukraine' },
    AE: { name: 'United Arab Emirates' },
    GB: { name: 'United Kingdom' },
    US: { name: 'United States' },
    VE: { name: 'Venezuela' }
};


/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  color: #333;\n  border: none;\n  border-radius: 100px;\n  background-color: #fafafa;\n  padding: 5px 16px;\n  margin-left: 8px;\n  width: 50%;\n  max-width: 600px;\n  height: 60%;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 0.3px;\n  font-weight: 400;\n  -webkit-appearance: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWtoYWlsb19vZHJla2hpdnNreWkvRGVza3RvcC9uZXdzLWFwcC9zcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiA1cHggMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuIiwiaW5wdXQge1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgcGFkZGluZzogNXB4IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchComponent = class SearchComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SearchComponent.prototype, "searchInput", void 0);
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/services/article.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/article.service.ts ***!
  \*********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagination.service */ "./src/app/services/pagination.service.ts");








const pageSize = 30;
let ArticleService = class ArticleService {
    constructor(http, store, searchService, paginationService) {
        this.http = http;
        this.store = store;
        this.searchService = searchService;
        this.paginationService = paginationService;
        this.TOP_HEADLINES = 'https://newsapi.org/v2/top-headlines';
        this.EVERYTHING = 'https://newsapi.org/v2/everything';
        this.newsApiKey = '7c0c987bdf7d4d8fb61d66241baa6368';
    }
    getTopHeadlines(params = {}) {
        return this.http.get(`${this.TOP_HEADLINES}`, {
            params: Object.assign({ apiKey: this.newsApiKey }, params)
        });
    }
    getEverything(params = {}) {
        return this.http.get(`${this.EVERYTHING}`, {
            params: Object.assign({ apiKey: this.newsApiKey }, params)
        });
    }
    getArticlesByCountry() {
        return this.store.changeCountry$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((country) => this.getTopHeadlines({ country, pageSize }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            this.paginationService.length = data.totalResults;
            return data.articles;
        }))));
    }
    getArticlesByCategory() {
        return this.store.changeCategory$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((category) => this.getTopHeadlines({ country: this.store.changeCountry$.value, category, pageSize }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data.articles))));
    }
    getArticlesBySearch(inputRef) {
        return this.searchService.getInputValue(inputRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((value) => this.getEverything({ q: value, pageSize }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            this.paginationService.length = data.totalResults;
            return data.articles;
        }))));
    }
    getArticlesWhenInputIsEmpty() {
        return this.store.handleEmptySearch$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((isInputClear) => isInputClear), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.getTopHeadlines({ country: this.store.changeCountry$.value }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data.articles))));
    }
    getArticlesByPage(inputRef) {
        return this.store.changePage$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((event) => this.getEverything({
            page: event.pageIndex + 1,
            pageSize: event.pageSize,
            q: inputRef.nativeElement.value
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data.articles), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)))));
    }
};
ArticleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"] },
    { type: _search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"] },
    { type: _pagination_service__WEBPACK_IMPORTED_MODULE_7__["PaginationService"] }
];
ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"],
        _search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"],
        _pagination_service__WEBPACK_IMPORTED_MODULE_7__["PaginationService"]])
], ArticleService);



/***/ }),

/***/ "./src/app/services/country.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _local_starage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-starage.service */ "./src/app/services/local-starage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let CountryService = class CountryService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.BASE_URL = 'https://ipapi.co/json';
    }
    getLocalization() {
        return this.http.get(`${this.BASE_URL}`);
    }
    getCountry() {
        const country = this.ls.get('country');
        if (!country) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('US'); // 'US' by default for first login
        }
        else {
            return this.getLocalization().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((localization) => {
                this.ls.set('country', localization.country);
                return localization.country;
            }));
        }
    }
};
CountryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _local_starage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _local_starage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
], CountryService);



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article/article.component */ "./src/app/article/article.component.ts");




let DialogService = class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(data) {
        const dialogRef = this.dialog.open(_article_article_component__WEBPACK_IMPORTED_MODULE_3__["ArticleComponent"], {
            panelClass: 'full-width-dialog',
            data
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result, 'dialog closed');
        });
    }
};
DialogService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], DialogService);



/***/ }),

/***/ "./src/app/services/local-starage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-starage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocalStorageService = class LocalStorageService {
    get(key) {
        return localStorage.getItem(key);
    }
    set(key, value) {
        localStorage.setItem(key, value);
    }
    remove(key) {
        localStorage.removeItem(key);
    }
};
LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], LocalStorageService);



/***/ }),

/***/ "./src/app/services/pagination.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/pagination.service.ts ***!
  \************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationService = class PaginationService {
    constructor() {
        this._length = 100;
        this._pageSizeOptions = [30, 10];
    }
    get length() {
        return this._length;
    }
    set length(newLength) {
        this._length = newLength;
    }
    get pageSizeOptions() {
        return this._pageSizeOptions;
    }
    get pageSize() {
        return this._pageSize;
    }
    set pageSize(newPageSize) {
        this._length = newPageSize;
    }
};
PaginationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PaginationService);



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.service */ "./src/app/services/store.service.ts");





let SearchService = class SearchService {
    constructor(storeService) {
        this.storeService = storeService;
    }
    getInputValue(inputRef) {
        const fromClick$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(inputRef.nativeElement, 'click');
        const fromKeyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(inputRef.nativeElement, 'keyup');
        const merged$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(fromClick$, fromKeyUp$);
        return merged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => value.target.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(value => {
            const isValidValue = !!value && !!value.trim();
            this.handleEmptyValue(!value);
            return isValidValue;
        }));
    }
    handleEmptyValue(isEmpty) {
        this.storeService.handleEmptySearch$.next(isEmpty);
    }
};
SearchService.ctorParameters = () => [
    { type: _store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }
];
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]])
], SearchService);



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let StoreService = class StoreService {
    constructor() {
        this.changeCountry$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.changeCategory$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changePage$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.handleEmptySearch$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
    }
};
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], StoreService);



/***/ }),

/***/ "./src/app/shared/helpers/media-query.helper.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/helpers/media-query.helper.ts ***!
  \******************************************************/
/*! exports provided: MediaQueryHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueryHelper", function() { return MediaQueryHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");



let MediaQueryHelper = class MediaQueryHelper {
    constructor(media) {
        this.media = media;
    }
    getMobileQuery(changeDetectorRef) {
        this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addEventListener('change', this.mobileQueryListener);
        return this.mobileQuery;
    }
    removeMobileQueryEventListener() {
        this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
    }
};
MediaQueryHelper.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] }
];
MediaQueryHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]])
], MediaQueryHelper);



/***/ }),

/***/ "./src/app/sidenav-content/sidenav-content.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/sidenav-content/sidenav-content.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYtY29udGVudC9zaWRlbmF2LWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sidenav-content/sidenav-content.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sidenav-content/sidenav-content.component.ts ***!
  \**************************************************************/
/*! exports provided: SidenavContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavContentComponent", function() { return SidenavContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidenavContentComponent = class SidenavContentComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SidenavContentComponent.prototype, "articles", void 0);
SidenavContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav-content',
        template: __webpack_require__(/*! raw-loader!./sidenav-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav-content/sidenav-content.component.html"),
        styles: [__webpack_require__(/*! ./sidenav-content.component.scss */ "./src/app/sidenav-content/sidenav-content.component.scss")]
    })
], SidenavContentComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mykhailo_odrekhivskyi/Desktop/news-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map