function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-user-add-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddUserAddUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<!-- \n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>addUser</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title align-title=\"center\" >Add New Profile</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <!-- <form (ngSubmit)=\"register()\"> -->\n    <form  #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"20\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>Create New User!</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-label  position=\"floating\" >Name</ion-label>\n              <ion-input  [(ngModel)]=\"user.name\"  name =\"name\" type=\"text\" placeholder=\"Charan Kumar\"  required>\n              <!-- <ion-input [(ngModel)]=\"user.username\" type=\"text\"></ion-input> -->\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label   position=\"floating\" >Org</ion-label>\n              <ion-input [(ngModel)]=\"user.org\" type=\"text\" name =\"org\" placeholder=\"finance\" required>\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label  position=\"floating\" >Vehicle Number </ion-label>\n              <ion-input  [(ngModel)]=\"user.plate\" name=\"plate\" type=\"text\" placeholder=\"KA 02 AY 3365\"  required>\n              </ion-input>\n            </ion-item>\n         <ion-item> \n              <ion-label  position=\"floating\"  >Vehicle Model Year </ion-label>\n              <ion-input  [(ngModel)]=\"user.model\" name=\"model\" type=\"text\" placeholder=\"2020\"  required>\n              </ion-input>\n            </ion-item > \n              <ion-item>\n              <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n              <ion-label position=\"floating\" required>Due Date</ion-label>\n              <ion-input   type=\"text\"  required>\n                <ion-datetime  [(ngModel)]=\"user.date\" pickerFormat=\"MMMM YYYY\" name=\"date\" displayFormat=\"MMM DD, YYYY\" max=\"2056\" placeholder=\"Feb 20,2020\" required></ion-datetime>\n              </ion-input>\n             \n            </ion-item>\n\n            <!-- <p>{{today | date}}</p> -->\n\n\n            <!-- <ion-item>\n              <ion-label  position=\"floating\"  >Vehicle Model Year </ion-label>\n              <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel required></ion-input>\n            </ion-item> -->\n\n          </div>\n          <div padding align=\"center\" width=\"200px\">\n            <ion-button  size=\"default\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"fill\">Register</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/add-user/add-user-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/add-user/add-user-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AddUserPageRoutingModule */

  /***/
  function srcAppAddUserAddUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserPageRoutingModule", function () {
      return AddUserPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-user.page */
    "./src/app/add-user/add-user.page.ts");

    var routes = [{
      path: '',
      component: _add_user_page__WEBPACK_IMPORTED_MODULE_3__["AddUserPage"]
    }];

    var AddUserPageRoutingModule = function AddUserPageRoutingModule() {
      _classCallCheck(this, AddUserPageRoutingModule);
    };

    AddUserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddUserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-user/add-user.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/add-user/add-user.module.ts ***!
    \*********************************************/

  /*! exports provided: AddUserPageModule */

  /***/
  function srcAppAddUserAddUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserPageModule", function () {
      return AddUserPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-user-routing.module */
    "./src/app/add-user/add-user-routing.module.ts");
    /* harmony import */


    var _add_user_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./add-user.page */
    "./src/app/add-user/add-user.page.ts");

    var AddUserPageModule = function AddUserPageModule() {
      _classCallCheck(this, AddUserPageModule);
    };

    AddUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _add_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddUserPageRoutingModule"]],
      declarations: [_add_user_page__WEBPACK_IMPORTED_MODULE_7__["AddUserPage"]]
    })], AddUserPageModule);
    /***/
  },

  /***/
  "./src/app/add-user/add-user.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/add-user/add-user.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddUserAddUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --background: #4789fc;\n  --color: #fff;\n}\n\nion-button {\n  --background: #062f77;\n}\n\nion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 90px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFyYW5rdW1hci9Eb2N1bWVudHMvTUZQX1B1c2gvSW9uaWNXb3JrL0RlbW9zL1NlcnZpY2Uvc3JjL2FwcC9hZGQtdXNlci9hZGQtdXNlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogIzQ3ODlmYztcbiAgICAtLWNvbG9yOiAjZmZmO1xufVxuXG5pb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogIzA2MmY3Nztcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMCA5MHB4IDFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4iLCJpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzQ3ODlmYztcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzA2MmY3Nztcbn1cblxuaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDAgOTBweCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/add-user/add-user.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/add-user/add-user.page.ts ***!
    \*******************************************/

  /*! exports provided: AddUserPage */

  /***/
  function srcAppAddUserAddUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserPage", function () {
      return AddUserPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddUserPage =
    /*#__PURE__*/
    function () {
      function AddUserPage(httpClient, router) {
        _classCallCheck(this, AddUserPage);

        this.httpClient = httpClient;
        this.router = router;
        this.today = Date.now();
        this.datebirth = new Date().getTime();
        this.user = {
          name: '',
          org: '',
          plate: '',
          model: '',
          date: '',
          status: ''
        };
      }

      _createClass(AddUserPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "format",
        value: function format(val) {
          return new Date(val).getTime();
        }
      }, {
        key: "register",
        value: function register(form) {
          var _this = this;

          alert(this.datebirth); // alert(this.user.date);
          // const body = {user: 'login', password: 'pass'};

          this.httpClient.post('http://localhost:3000/submit', this.user).subscribe(function (data) {
            // this.items = data;
            // alert(data);
            // alert(this.today);
            console.log('Latest Data :', data);

            _this.router.navigate(['search'], {
              state: {
                example: "bar",
                myitems: data
              }
            }); // console.log('y data: ', data);

          });
        }
      }]);

      return AddUserPage;
    }();

    AddUserPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AddUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-user.page.scss */
      "./src/app/add-user/add-user.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AddUserPage);
    /***/
  }
}]);
//# sourceMappingURL=add-user-add-user-module-es5.js.map