function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- Scrollable Segment -->\n<!-- <ion-segment scrollable value=\"home\">\n\n  <ion-segment-button value=\"home\">\n    <ion-icon name=\"home\"></ion-icon>\n  </ion-segment-button>\n\n  <ion-segment-button value=\"1\" layout=\"icon-bottom\">\n    <ion-label>add</ion-label>\n    <ion-icon name=\"add\"></ion-icon>\n\n  </ion-segment-button>\n\n  \n</ion-segment> -->\n\n\n\n<!-- \n<ion-header>  \n  <ion-toolbar>  \n    <ion-buttons slot=\"start\">  \n      <ion-menu-button></ion-menu-button>  \n    </ion-buttons>  \n    <ion-title>Ionic Segment</ion-title>  \n  </ion-toolbar>  \n</ion-header>  \n  \n<ion-content class=\"ion-padding\" color=\"light\">  \n  <ion-toolbar>  \n    <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\" color=\"primary\">  \n      <ion-segment-button value=\"0\">  \n        <ion-label>Contact</ion-label>  \n        <ion-icon name=\"contact\"></ion-icon>  \n      </ion-segment-button>  \n      <ion-segment-button value=\"1\">  \n        <ion-label>Camera</ion-label>  \n        <ion-icon name=\"camera\"></ion-icon>  \n      </ion-segment-button>  \n      <ion-segment-button value=\"2\">  \n        <ion-label>Map</ion-label>  \n        <ion-icon name=\"pin\"></ion-icon>  \n      </ion-segment-button>  \n    </ion-segment>  \n  </ion-toolbar>  \n    \n  <ion-slides #slides (ionSlideDidChange)=\"slideChanged()\" scrollbar=\"true\">  \n    <ion-slide>First Segment</ion-slide>  \n    <ion-slide>Second Segment</ion-slide>  \n    <ion-slide>Third Segment</ion-slide>  \n  </ion-slides>  \n</ion-content>   -->\n\n\n\n\n<!-- <ion-header [translucent]=\"true\" background=\"blue\" color=\"blue\">\n  <ion-toolbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<br><br><br><br>\n<div class=\"login-logo\">\n  <img src=\"assets/img/car.jpg\" alt=\"Ionic logo\" height=\"120px\" width=\"120px\"/>\n</div>\n\n<ion-toolbar>\n  <ion-title size=\"large\"><p align=\"center\" text-overflow=\"ellipsis\" fontSize=\"20\"><font size=\"5\" color=\"red\">MotoCorp Service Center</font></ion-title>\n</ion-toolbar>\n\n<ion-content>\n\n  <form #loginForm=\"ngForm\">\n    <ion-list>\n      <div id=\"container\" padding>\n      <ion-item>\n        <ion-label position=\"stacked\"  position=\"floating\" color=\"primary\">Username</ion-label>\n        <ion-input\n          [(ngModel)]=\"login.username\"\n          name=\"username\"\n          type=\"text\"\n          #username=\"ngModel\"\n          spellcheck=\"false\"\n          autocapitalize=\"off\"\n          required\n        >\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p\n          [hidden]=\"username.valid || submitted == false\"\n          class=\"ion-padding-start\"\n        >\n          Username is required\n        </p>\n      </ion-text>\n\n      <ion-item>\n        <ion-label position=\"stacked\" position=\"floating\" color=\"primary\">Password</ion-label>\n        <ion-input\n          [(ngModel)]=\"login.password\"\n          name=\"password\"\n          type=\"password\"\n          #password=\"ngModel\"\n          required\n        >\n        </ion-input>\n      </ion-item>\n\n\n\n      \n      <ion-text color=\"danger\">\n        <p\n          [hidden]=\"password.valid || submitted == false\"\n          class=\"ion-padding-start\"\n        >\n          Password is required\n        </p>\n      </ion-text>\n      </div>\n    </ion-list>\n\n    <ion-button class=\"custom ion-activated\" shape=\"round\" fill=\"outline\" (click)=\"pushInit()\" > <ion-icon slot=\"end\"></ion-icon>Init</ion-button>\n<br>\n<br>\n    <!-- <ion-row> -->\n      <div padding align=\"center\" width=\"300px\">\n      <ion-button class=\"custom ion-activated\" shape=\"round\" fill=\"outline\" (click)=\"onLogin(loginForm)\" type=\"submit\" > <ion-icon slot=\"end\" name=\"log-in\"></ion-icon>login</ion-button>\n      <ion-button class=\"custom ion-activated\" shape=\"round\" fill=\"outline\"  > <ion-icon slot=\"end\" name=\"paper-plane\"></ion-icon>Sign Up</ion-button>\n    </div>\n      <!-- <ion-button shape=\"round\" fill=\"outline\">Outline + Round</ion-button> -->\n    <!-- </ion-row> -->\n  </form>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-logo {\n  padding: 20px 0;\n  min-height: 100px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-slide {\n  height: calc(100vh - 140px);\n}\n\n#container {\n  width: 350px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFyYW5rdW1hci9Eb2N1bWVudHMvTUZQX1B1c2gvSW9uaWNXb3JrL0RlbW9zL1NlcnZpY2Uvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG9naW4tbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pb24tc2xpZGUgeyAgXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE0MHB4KTsgIFxufSAgXG5cbiNjb250YWluZXIge1xuICB3aWR0aDogMzUwcHg7IFxuICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbn1cblxuLy8gaW9uLWl0ZW0ge1xuLy8gICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbi8vICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuLy8gfSIsIi5sb2dpbi1sb2dvIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE0MHB4KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // import { MFPPush} from "../../../plugins/cordova-plugin-mfp-push/www/"


    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(alertController, router, toastController, httpClient) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.alertController = alertController;
        this.router = router;
        this.toastController = toastController;
        this.httpClient = httpClient; // login: string = "My Default Text";

        this.login = {
          username: "",
          password: ""
        };
        this.submitted = false; // this.httpClient.get('https://api.myjson.com/bins/7d7fc').subscribe(data => {

        this.httpClient // .get(
        //   'https://jsonblob.com/api/jsonBlob/73d244c2-5315-11ea-8e7b-3da7578b2e0a'
        // )
        .get( //  'https://jsonblob.com/api/jsonBlob/1967478e-53bb-11ea-a41b-b5f1e0b3474a'
        'http://9.109.207.198:3000/get').subscribe(function (data) {
          _this.items = data;
          console.log("my data: ", _this.items.org);
        });
      }

      _createClass(HomePage, [{
        key: "pushInit",
        value: function pushInit() {
          var _this2 = this;

          WLAuthorizationManager.obtainAccessToken("push.mobileclient").then(function (accessToken) {
            MFPPush.registerDevice(null, function (successResponse) {
              alert("Success"); // navigator.notification.alert("Successfully registered");

              MFPPush.registerNotificationsCallback(_this2.notificationReceived); // enableButtons();
            }, function (failureResponse) {
              alert(failureResponse); // navigator.notification.alert("Failed to register");

              console.log('Failed to register device:' + JSON.stringify(failureResponse));
            });
          });
        }
      }, {
        key: "notificationReceived",
        value: function notificationReceived(notification) {
          // alert("received");
          // notification is a JSON object
          alert(JSON.stringify(notification));
        }
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          alert('hi');
          this.submitted = true;

          if (form.valid) {
            this.router.navigate(["search"], {
              state: {
                example: "bar",
                myitems: this.items.users
              }
            }); // WLAuthorizationManager.obtainAccessToken('').then(
            //   response => {
            //     // alert('-->  pingMFP(): Success ');
            //     console.log('-->  pingMFP(): Success ', response);
            //     this.router.navigate(["search"], {
            //       state: { example: "bar", myitems: this.items.users }
            //     });
            //     this.toastController.create({
            //       message: 'Log in Successful',
            //       duration: 5000
            //     }).then((toastData) => {
            //       console.log(toastData);
            //       toastData.present();
            //     });
            //       // alert("Connected to MobileFirst Server");
            //     },
            //     error => {
            //       console.log('-->  pingMFP():  ERROR ', error.responseText);
            //       alert('Failed to connect to MobileFirst Server');
            //     }
            //   );
          }
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map