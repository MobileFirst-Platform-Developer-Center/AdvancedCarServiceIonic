(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-details-user-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-details/user-details.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-details/user-details.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons> -->\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div align=\"center\">\n          \n    <h1> Profile</h1>\n    <img class=\"profile-image\" src=\"{{user.img}}\">\n    <p> Org: {{user.org}}</p>\n      <!-- <h4>{{user.name}}</h4>\n      <h5>{{user.org}} years old</h5> -->\n      <!-- <h5>{{myglobal}} years old</h5> -->\n      <b> <p> Due date : {{user.duedate | date}}</p></b>\n\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n          <ion-label position=\"stacked\">Date</ion-label>\n          <ion-datetime displayFormat=\"MMM DD, YYYY\" max=\"2056\" [(ngModel)]=\"bookingdate\"></ion-datetime>\n          <ion-button slot=\"end\" (click)='onBook()'>Book</ion-button>\n        </ion-item>\n    \n      </ion-list>\n  </div>\n\n\n  <div align=\"center\">\n    <h2> History</h2>\n  </div>\n\n\n  <ion-list *ngFor=\"let u of user.history\">\n\n\n\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>{{u.date}}</ion-card-title>\n            <ion-card-subtitle>{{u.Type}}</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-content>\n            {{u.Comments}}\n          </ion-card-content>\n        </ion-card>        \n\n\n  </ion-list>\n\n\n  <div padding align=\"center\" width=\"200px\">\n    <ion-button  size=\"default\" expand=\"fill\" (click)=\"backPage()\">Back</ion-button>\n  </div>\n\n</ion-content>\n\n\n\n\n\n<!-- <ion-content padding>\n  \n  \n  <form #formCtrl=\"ngForm\">\n      <div align=\"center\" *ngIf=\"formCtrl.form.valid\">\n          \n        <h1> Profile</h1>\n        <img class=\"profile-image\" src=\"assets/imgs/profile.jpg\">\n          <h4>{{person.name}}, {{person.company}}</h4>\n          <h5>{{age}} years old</h5>\n      </div>\n  <ion-list>\n      <ion-item>\n        <ion-label floating>Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"person.name\" name=\"name\" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Company</ion-label>\n        <ion-select [(ngModel)]=\"person.company\" name=\"company\" required>\n          <ion-option value=\"Maybank\">Maybank</ion-option>\n          <ion-option value=\"CIMB\">CIMB</ion-option>\n          <ion-option value=\"Public Bank\">Public Bank</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n          <ion-label >Birth Date</ion-label>\n          <ion-datetime required name=\"birthdate\" displayFormat=\"DD MMM YYYY\" pickerFormat=\"DD MMM YYYY\" [(ngModel)]=\"dob\" [ngModelOptions]=\"{standalone:true}\"></ion-datetime>\n      </ion-item>\n      \n  </ion-list>\n  <button color=\"secondary\" [disabled]=\"!formCtrl.form.valid\" ion-button block (click)=\"save()\">Save</button>\n  <button color=\"danger\" ion-button block (click)=\"reset()\">Reset</button>\n</form>\n</ion-content> -->");

/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import { HttpClient } from "@angular/common/http";
let MyserviceService = class MyserviceService {
    constructor(
    // public httpClient: HttpClient
    ) {
        this.myglobal = 'charan';
        {
            // this.httpClient
            // .get(
            //     'http://192.168.1.100:3000/get'
            //   )
            //   .subscribe(data => {
            //     this.globalItems = data;
            //     console.log("---------->>>>FIRST", this.globalItems.org);
            //   });
        }
    }
};
MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyserviceService);



/***/ }),

/***/ "./src/app/user-details/user-details-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-details/user-details-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPageRoutingModule", function() { return UserDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-details.page */ "./src/app/user-details/user-details.page.ts");




const routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_3__["UserDetailsPage"]
    }
];
let UserDetailsPageRoutingModule = class UserDetailsPageRoutingModule {
};
UserDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/user-details/user-details.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-details/user-details.module.ts ***!
  \*****************************************************/
/*! exports provided: UserDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPageModule", function() { return UserDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _user_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-details-routing.module */ "./src/app/user-details/user-details-routing.module.ts");
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details.page */ "./src/app/user-details/user-details.page.ts");







let UserDetailsPageModule = class UserDetailsPageModule {
};
UserDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDetailsPageRoutingModule"]
        ],
        declarations: [_user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]]
    })
], UserDetailsPageModule);



/***/ }),

/***/ "./src/app/user-details/user-details.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/user-details/user-details.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-image {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 3px;\n  border-radius: 100%;\n  box-sizing: content-box;\n  margin: 0 auto;\n  width: 128px;\n  height: 128px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFyYW5rdW1hci9Eb2N1bWVudHMvTUZQX1B1c2gvSW9uaWNXb3JrL0RlbW9zL1NlcnZpY2Uvc3JjL2FwcC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUdBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1hZ2Uge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6IDEyOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH0iLCIucHJvZmlsZS1pbWFnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/user-details/user-details.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user-details/user-details.page.ts ***!
  \***************************************************/
/*! exports provided: UserDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPage", function() { return UserDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../myservice.service */ "./src/app/myservice.service.ts");




let UserDetailsPage = class UserDetailsPage {
    // myglobal: any;
    constructor(router, myservice) {
        this.router = router;
        this.myservice = myservice;
        this.bookingdate = new Date().toISOString();
        console.log(this.router.getCurrentNavigation().extras.state.user);
        this.user = this.router.getCurrentNavigation().extras.state.user;
    }
    ngOnInit() {
        // this.myglobal = this.myservice.myglobal;
    }
    onBook() {
        alert('Booking Done..!!');
    }
    backPage() {
        console.log('Go Back ');
        this.router.navigate(['search'], {});
    }
};
UserDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"] }
];
UserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-details/user-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-details.page.scss */ "./src/app/user-details/user-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"]])
], UserDetailsPage);



/***/ })

}]);
//# sourceMappingURL=user-details-user-details-module-es2015.js.map