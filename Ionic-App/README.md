



- [Setup Ionic App](#setup-ionic-app)
- [Enabling Push notifications](#enabling-push-notifications)
- [Enabling MFP Analytics](#enabling-mfp-analytics)
  - [Creating charts in MobileFoundation Analytics dashboard](#creating-charts-in-mobilefoundation-analytics-dashboard)
    - [a.Table chart](#atable-chart)
    - [b.Flow chart](#bflow-chart)
    - [c.Pie chart](#cpie-chart)

#  Setup Ionic App
```
$ cd Ionic-App
.
.
29 packages are looking for funding
  run `npm fund` for details

found 62 vulnerabilities (15 low, 17 moderate, 30 high)
  run `npm audit fix` to fix them, or `npm audit` for details


$ npm install
 
$ ionic cordova prepare

$  mfpdev app register
Verifying server configuration...
Registering to server:'http://localhost:9080' runtime:'mfp'
Updated config.xml file located at: Advanced-Car-Service/Ionic-App/config.xml
Run 'cordova prepare' to propagate changes.
Registered app for platform: android
Registered app for platform: ios

<!-- Make Sure Device/simulator up and running -->
$ ionic cordova run android -l    


```
- in `home.page.ts` update the value pointing to your appsody node server url in `<URL>`


```
constructor(
.
.

  ) {
    this.httpClient
      .get(
        'http://<URL>:3000/get'
```

- In `add-user.page.ts` update the value pointing to your appsody node server url in `<URL>`

```
register(form: any) {

    this.httpClient
      .post(
        'http://<URL>/submit', this.user
    )

```


# Enabling Push notifications

We are using cordova mfp push plugin - https://www.npmjs.com/package/cordova-plugin-mfp-push

While the login successful , we are enabling our device to register for push notifications in `home.page.ts`

```
onLogin(form: NgForm) {
    .
    .
    .
    WLAuthorizationManager.obtainAccessToken("push.mobileclient").then(
            (accessToken) => {
              MFPPush.registerDevice(
                null,
                (successResponse) => {
                  MFPPush.registerNotificationsCallback( this.notificationReceived);
                  this.router.navigate(["search"], {


```
- create a `push.mobileclient` Scope element On server side 
 > Home > mfp > MotoCorp Car Service > Android 0.0.1 > Scope-Elements Mapping

# Enabling MFP Analytics 

We can create custom analytics events and track them in the analytics dashboard Before that we trigger few events from ionic app as shown below

![Dashboard](/Assets/analytics/Dashboard.png)

 **App login Success**
```
    WL.Analytics.log({ appstarted: 'login' });
    WL.Analytics.send();
```


 **App user profile Register**
```
    WL.Analytics.log({ CarService: 'register' });
    WL.Analytics.send();
```

 **App user profile Register**
```
    WL.Analytics.log({ CarService: 'register' });
    WL.Analytics.send();
```


## Creating charts in MobileFoundation Analytics dashboard



custom analytics data is sent to the MobileFoundation server using analytics APIs. This data is in key, value format. For example, 

<pre><code>
WL.Analytics.log({'username':  username}); 
</code></pre>

Below are example shown to draw custome charts from the custom data we triggered from client app
### a.Table chart
Tablechart is used to capture the `username` custom data and the corresponding device usage and the device os version. 
Click on the 'Create Chart' option under the 'Custom charts' tab.
Define the table chart as shown below

<img src="/Assets/analytics/Analytics_tablechart1.png" alt="Tablechart1" width="640" border="10">
<img src="/Assets/analytics/Analytics_tablechart2.png" alt="Tablechart2" width="640" border="10">

<img src="/Assets/analytics/Analytics_tablechart3.png" alt="Tablechart3" width="640" border="10">

Save the chart and adjust the time frame to see the information listed similar to what is shown below

<img src="/Assets/analytics/Analytics_tablechart4.png" alt="Tablechart4" width="640" border="10">

### b.Flow chart
`Page Transition` is one of the flow charts that can be used to identify the pattern in which the application users browse through the app pages.

<pre><code>
WL.Analytics.log({'fromPage':'HomePage','toPage':'ProblemDetailPage'});
</code></pre>

`fromPage` and `toPage` are the key values to be used in the custom chart configuration. 
Click on the 'Create chart' option under the 'Custom charts' tab. Define the Flow chart as below
<img src="/Assets/analytics/Analytics_pagetransition1.png" alt="PageTransition1" width="640" border="10">
<img src="/Assets/analytics/Analytics_pagetransition2.png" alt="PageTransition2" width="640" border="10">

Save the chart and adjust the time frame to see the information listed similar to what is shown below

<img src="/Assets/analytics/Analytics_pagetransition3.png" alt="PageTransition3" width="640" border="1">

### c.Pie chart

To know the spread of types of device models used by customers the pie custom chart can be used.
Click on the 'Create chart' option under the 'Custom charts' tab. Define the Flow chart as below

<img src="/Assets/analytics/Analytics_DeviceModel1.png" alt="Devicemodel1" width="640" border="10">
<img src="/Assets/analytics/Analytics_DeviceModel2.png" alt="Devicemodel2" width="640" border="10">

Save the chart and adjust the time frame to see the information listed similar to what is shown below

<img src="/Assets/analytics/Analytics_DeviceModel3.png" alt="Devicemodel3" width="640" border="10">


