import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { UserOptions } from "../interfaces/user-options";
import { ToastController, AlertController } from "@ionic/angular";
// import { MFPPush} from "../../../plugins/cordova-plugin-mfp-push/www/"

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  // login: string = "My Default Text";
  login: UserOptions = { username: "", password: "" };
  submitted = false;
  items: any;
  option: {};
  payload: any;

  constructor(
    public alertController: AlertController,
    public router: Router,
    public toastController: ToastController,
    public httpClient: HttpClient
  ) {
    // WL.Analytics.log({ appstarted: 'now' });
    // WL.Analytics.send();

    this.httpClient
      .get(
        'http://9.109.207.198:3000/get'
      )
      .subscribe(data => {
        this.items = data;
        console.log("my data: ", this.items.org);
      });


  }

 

  notificationReceived(notification) {
    alert(notification.alert);
  }

  onLogin(form: NgForm) {
    this.analyticsInit();
    this.submitted = true;
    WL.Analytics.log({ appstarted: 'login' });
    WL.Analytics.send();

    if (form.valid) {
      MFPPush.initialize (
        (successResponse) => {
          // alert("Successfully intialized");
          WLAuthorizationManager.obtainAccessToken("push.mobileclient").then(
            (accessToken) => {
              MFPPush.registerDevice(
                null,
                (successResponse) => {
                  MFPPush.registerNotificationsCallback( this.notificationReceived);
                  this.router.navigate(["search"], {
                    state: { example: "bar", myitems: this.items.users }
                  });
                  this.toastController.create({
                    message: 'Log in Successful',
                    duration: 2000
                  }).then((toastData) => {
                    console.log(toastData);
                    toastData.present();
                  });
                },
                (failureResponse) => {
                  WL.Analytics.log({ appstarted: 'failure' });
                  WL.Analytics.send();
                  alert(failureResponse);
                  console.log('Failed to register device:' + JSON.stringify(failureResponse));
                }
              );
            }
        );
            // MFPPush.registerNotificationsCallback(this.notificationReceived);
        },
        (failureResponse) => {
            alert("Failed to initialize");
        }
      );
    }
  }


  analyticsInit() {
    WL.Client.init({
      onSuccess : () => {
        WL.Analytics.enable().then( (success) => {
          console.log(success);
        }).fail( (errObj) => {
          console.log(errObj);
        });
      },
      onFailure : (err) => {
        console.log("Failed WL");
      }
    });
  }
}
