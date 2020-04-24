function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newvisit-newvisit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/newvisit/newvisit.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newvisit/newvisit.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewvisitNewvisitPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>newvisit</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title align-title=\"center\" >New Visit</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n \n\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n      <ion-label position=\"stacked\">Date</ion-label>\n      <ion-datetime displayFormat=\"MMM DD, YYYY\" max=\"2056\" [(ngModel)]=\"conferenceDate\"></ion-datetime>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/newvisit/newvisit-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/newvisit/newvisit-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: NewvisitPageRoutingModule */

  /***/
  function srcAppNewvisitNewvisitRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewvisitPageRoutingModule", function () {
      return NewvisitPageRoutingModule;
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


    var _newvisit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./newvisit.page */
    "./src/app/newvisit/newvisit.page.ts");

    var routes = [{
      path: '',
      component: _newvisit_page__WEBPACK_IMPORTED_MODULE_3__["NewvisitPage"]
    }];

    var NewvisitPageRoutingModule = function NewvisitPageRoutingModule() {
      _classCallCheck(this, NewvisitPageRoutingModule);
    };

    NewvisitPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NewvisitPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/newvisit/newvisit.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/newvisit/newvisit.module.ts ***!
    \*********************************************/

  /*! exports provided: NewvisitPageModule */

  /***/
  function srcAppNewvisitNewvisitModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewvisitPageModule", function () {
      return NewvisitPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _newvisit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./newvisit-routing.module */
    "./src/app/newvisit/newvisit-routing.module.ts");
    /* harmony import */


    var _newvisit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./newvisit.page */
    "./src/app/newvisit/newvisit.page.ts");

    var NewvisitPageModule = function NewvisitPageModule() {
      _classCallCheck(this, NewvisitPageModule);
    };

    NewvisitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _newvisit_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewvisitPageRoutingModule"]],
      declarations: [_newvisit_page__WEBPACK_IMPORTED_MODULE_6__["NewvisitPage"]]
    })], NewvisitPageModule);
    /***/
  },

  /***/
  "./src/app/newvisit/newvisit.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/newvisit/newvisit.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewvisitNewvisitPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 90px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.about-header {\n  background-color: #222;\n  padding: 16px;\n  width: 100%;\n  height: 30%;\n  text-align: center;\n}\n\n.about-header img {\n  max-height: 100%;\n}\n\n.about-info p {\n  color: var(--ion-color-dark);\n  text-align: left;\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n.ios .about-info {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFyYW5rdW1hci9Eb2N1bWVudHMvTUZQX1B1c2gvSW9uaWNXb3JrL0RlbW9zL1NlcnZpY2Uvc3JjL2FwcC9uZXd2aXNpdC9uZXd2aXNpdC5wYWdlLnNjc3MiLCJzcmMvYXBwL25ld3Zpc2l0L25ld3Zpc2l0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmV3dmlzaXQvbmV3dmlzaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMCA5MHB4IDFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmFib3V0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmFib3V0LWhlYWRlciBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5hYm91dC1pbmZvIHAge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLmFib3V0LWluZm8gaW9uLWljb24ge1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xuICB9XG4gIFxuICAuaW9zIC5hYm91dC1pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgIiwiaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDAgOTBweCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFib3V0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWJvdXQtaGVhZGVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWJvdXQtaW5mbyBpb24taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xufVxuXG4uaW9zIC5hYm91dC1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/newvisit/newvisit.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/newvisit/newvisit.page.ts ***!
    \*******************************************/

  /*! exports provided: NewvisitPage */

  /***/
  function srcAppNewvisitNewvisitPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewvisitPage", function () {
      return NewvisitPage;
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

    var NewvisitPage =
    /*#__PURE__*/
    function () {
      function NewvisitPage(router) {
        _classCallCheck(this, NewvisitPage);

        this.router = router;
        console.log(this.router.getCurrentNavigation().extras.state.myitems);
        this.items = this.router.getCurrentNavigation().extras.state.myitems;
      }

      _createClass(NewvisitPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewvisitPage;
    }();

    NewvisitPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NewvisitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-newvisit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./newvisit.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/newvisit/newvisit.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./newvisit.page.scss */
      "./src/app/newvisit/newvisit.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], NewvisitPage);
    /***/
  }
}]);
//# sourceMappingURL=newvisit-newvisit-module-es5.js.map