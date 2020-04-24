(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<!-- \n<ion-segment>\n\n  <ion-segment-button value=\"home\">\n    <ion-icon name=\"home\"></ion-icon>\n  </ion-segment-button>\n\n  <ion-segment-button (ionSelect)=\"updateSchedule()\" value=\"1\" layout=\"icon-bottom\">\n    <ion-label>add</ion-label>\n    <ion-icon name=\"add\"></ion-icon>\n\n  </ion-segment-button>\n\n  <ion-segment-button (ionSelect)=\"addUser()\">\n    <ion-label>Friends</ion-label>\n  </ion-segment-button>\n\n  \n</ion-segment> -->\n\n\n\n\n  <ion-toolbar>\n    <!-- <ion-searchbar [(ngModel)]=\"queryText\" animated=\"true\" (ionChange)=\"updateSchedule()\" placeholder=\"Search\"></ion-searchbar> -->\n    <ion-searchbar [(ngModel)]=\"queryText\" animated=\"true\" (ionChange)=\"setFilteredLocations()\" placeholder=\"Search\"></ion-searchbar>\n    \n  </ion-toolbar>\n\n<ion-content >\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh()\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"dark\">\n      <ion-icon name=\"share\" ></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      \n      <ion-fab-button (click)=\"addUser()\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n\n    <ion-fab-list side=\"start\">\n      <ion-fab-button  (click)=\"about()\"><ion-icon name=\"information-circle\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <ion-list  *ngFor=\"let n of items\" (click)=\"userDetails(n)\">\n    <ion-card>\n      <ion-item>\n        <ion-label>{{n.name}}</ion-label>\n        <ion-button color=\"red\" fill=\"outline\" slot=\"end\">{{n.plate}}</ion-button>\n      </ion-item>\n      \n      <ion-item>\n        <ion-icon name={{n.status}} slot=\"end\"></ion-icon>\n        <ion-button color=\"red\" fill=\"clear\" slot=\"start\">{{n.model}}</ion-button>\n      </ion-item>\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");








let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




// import { ApiProvider } from '../providers/film';
let SearchPage = class SearchPage {
    constructor(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.today = Date.parse(new Date().toISOString());
        this.queryText = '';
        this.showList = true;
        this.allData = [];
        this.filterItems = [];
        console.log(this.router.getCurrentNavigation().extras.state.myitems);
        this.items = this.router.getCurrentNavigation().extras.state.myitems;
    }
    ionViewDidEnter() {
        // this.allData = this.locations.data;
        // this.items = this.router.getCurrentNavigation().extras.state.myitems;
        // this.filterItems = this.items;
    }
    doRefresh() {
        console.log("Refreshing");
        this.httpClient
            .get('http://192.168.1.100:3000/get')
            .subscribe(data => {
            this.refresh = data;
            this.items = data;
            // this.items = this.items.users;
            console.log(this.refresh.org);
        });
        this.router.navigate(["search"], {
            state: { myitems: this.items.users }
        });
    }
    ionViewWillEnter() {
        console.log("Entered ionViewWillEnter");
        this.items = this.router.getCurrentNavigation().extras.state.myitems;
    }
    userDetails(user) {
        console.log('Clicked User :', user.name);
        this.myuserDetails = user;
        this.router.navigate(['user-details'], { state: { example: 'bar', user: this.myuserDetails } });
    }
    setFilteredLocations() {
        alert('In Filter');
        this.filterItems = this.items.filter((name) => {
            return name.title.toLowerCase().indexOf(this.queryText.toLowerCase()) > -1;
        });
    }
    addUser() {
        // alert('clicked');
        this.router.navigate(['add-user'], { state: { example: 'bar', myitems: this.items } });
    }
    about() {
        // alert('clicked');
        this.router.navigate(['about'], {});
    }
    ngOnInit() {
    }
    updateSchedule() {
        alert('hello');
    }
};
SearchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2015.js.map