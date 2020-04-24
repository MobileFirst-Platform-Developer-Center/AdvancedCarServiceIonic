# Advanced-Car-Service



- [Advanced-Car-Service](#advanced-car-service)
- [Pre-requisites and Setup](#pre-requisites-and-setup)
- [Overview](#overview)
- [Flow](#flow)
  - [Write](#write)
  - [Read](#read)
- [Lab Steps](#lab-steps)

<!-- <p float="float">
    <img src="/Assets/login.png" width="300" alt="login" /> 
    <img src="/Assets/userlist.png" width="300" alt="userlist"/> 
    <img src="/Assets/BookAppointment.png" width="300" alt="BookAppointment" /> 
    <img src="/Assets/Menu.png" width="300" alt="Menu"/> 
    <img src="/Assets/Profile.png" width="300" alt="Profile"/> 
    <img src="/Assets/NewProfile.png" width="300" alt="NewProfile"/> 
    <img src="/Assets/ProfileAdd.png" width="300" alt="ProfileAdd"/> 
    <img src="/Assets/PushNotifications.png" width="3000" alt="PushNotifications"/>    
         
</p> -->


<div style="text-align: center"><table><tr>
  <td style="text-align: center">
        <img src="/Assets/login.png" width="300" alt="login" /> </a>
</td>
<td style="text-align: center">
  <img src="/Assets/userlist.png" width="300" alt="userlist"/> 
</td>
  <td style="text-align: center">
    <img src="/Assets/BookAppointment.png" width="300" alt="BookAppointment" /> 
</td>
</tr></table></div>


<div style="text-align: center"><table><tr>
</td>
  <td style="text-align: center">
 <img src="/Assets/Menu.png" width="300" alt="Menu"/> 
</td>
  <td style="text-align: center">
<img src="/Assets/Profile.png" width="300" alt="Profile"/>
</td>
  <td style="text-align: center">
    <img src="/Assets/NewProfile.png" width="300" alt="NewProfile"/> 
</tr></table></div>


<div style="text-align: center"><table><tr>
  <td style="text-align: center">
<img src="/Assets/ProfileAdd.png" width="300" alt="ProfileAdd"/> 
</td>
  <td style="text-align: center">
<img src="/Assets/PushNotifications.png" width="300" alt="PushNotifications"/>
</td>
</tr></table></div>


# Pre-requisites and Setup
- <a href="#step1">Setup Ionic and MFP CLI</a>
- <a href="#step2">Set up MFP Server  and configure MFP CLI
</a>
- <a href="https://appsody.dev/docs/getting-started/installation/">Appsody</a>


# Overview
In this lab, imagine you are an Enterprise that owns car service centers utlizing an on-premise CRM. You want to equip service center employees with mobile, and build an app that will help them coordinate activities in the service center to improve service times and quality of service across potentialy tens of thousands of locations.

One important element in this solution it is to allow your employees to have access to the most accurate data about your customer, as a customer can engage with your Enterprise via multiple channels.

So through this example we will explore a possible architecture that would allow an Enterprise that already has an OnPrem CRM solution, to expose the CRM data to a mobile app for its Service Centers employees, so they can deliver better customer service.

We will be utilizing the IBM Cloud services:

- Mobile Foundation
- Push Notifications
- Analytics
- Appsody

# Flow
 1. User launches the mobile app, enters his/her credentials on the login screen and clicks `Login`.
 2. Mobile app sends the user credentials to MFP server for validation with Authorization.
 3. user authentication succeeds, mobile app proceeds to show the home page. As part of this, it makes a call to Node Server running on Appsody to fetch the data.
 4. Once the data fetched the users details are shown on the App.
 5. User clicks on one of the list item to see more details. A detail page is shown consisting of image, information and the visits he/she made if any.
 6. Back in the home page, user clicks on floating action button `+`  to register, A new page is shown where user can enter a description details for the new registration. User clicks on `register` button.
 7. Mobile app send the registration details to the BackEnd.
 8. Meanwhile user can also book an appointment on particular date.
 9. If Required , User will be alerted with a `Push Notification` if he/she is due for car service.
 10. User actions can be captured via `mfp analytics` such as `userlogin-failures`, `userlogin-success`, `registrations` ,`login` , `logout` etc

In this lab we will cover how to implement the solution above asynchronously. The mobile app will be reading from a cached data repository which will be updated as frequently as possibly. The mobile app will also be writing (creating new customers/visits) . This allows the CRM to consume updates in a more controlled flow, mitigating the peaks and valleys of a service center working day. So if needed, more resources can be added to the CRM to support more load throughout the day, to keep data updated with less latency.

##  Write
- Login page validates the login from MFP Server
- User creates a new visit in the mobile app (Mobile App)



## Read
- User requests to view information on a specific visit
- User requests to view information on a specific customer 



# Lab Steps
Head over to the lab’s GitHub repository to see the labs mentioned below.


 Lab            | Description
----------------|----------
  [Ionic Mobile App](Ionic-App/README.md) | This lab shows how to integrate the Ionic App with the Adapters.
  [Appsody-project](Appsody-project/README.md) | This lab shows how to use Appsody using Node stack as a back end to serve request from Ionic App


<b><a name="step1">Setup Ionic and MFP CLI</a></b>


* Install `Node.js` by downloading the setup from https://nodejs.org/en/ (Node.js 8.x or above)
```
$ node --version
v12.14.1
```

* Install Cordova
```
$ sudo npm install -g cordova
$ cordova --version
9.0.0 (cordova-lib@9.0.1)
```

**Note**: If you are on Windows, instead of using `sudo`, run the above command (and the ones below) in a command prompt opened in administrative mode.


> Note: Please refer MFP documentation for compatible versions of Cordova - https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/application-development/sdk/cordova/



* Install Ionic
```
$ sudo npm install -g ionic
$ ionic --version
6.0.1
```

* Install IBM MobileFirst Platform CLI
```
$ sudo npm install -g mfpdev-cli
$ mfpdev --version
8.0.0-2018121711
```

<b><a name="step2">Set up MFP Server  and configure MFP CLI</a></b>


- Start MobileFirst Server instance locally by downloading the [Developer Kit](https://mobilefirstplatform.ibmcloud.com/downloads/#developer-kit) and [installing](https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/installation-configuration/development/mobilefirst/installation-guide/) it on your workstation.
- the default url would be http://localhost:9080 and username/password would be admin/admin .

```
[06:04:17] root: Advanced-Car-Service > mfpdev server add
? Enter the name of the new server profile: devserver
? Enter the fully qualified URL of this server: http://localhost:9080
? Enter the MobileFirst Server administrator login ID: admin
? Enter the MobileFirst Server administrator password:
? Enter the context root of the MobileFirst administration services: mfpadmin
? Enter the MobileFirst Server connection timeout in seconds: 30
? Make this server the default?: Yes
Verifying server configuration...
The following runtimes are currently installed on this server: mfp
Server profile 'devserver' added successfully.

[06:05:00] root: Advanced-Car-Service > mfpdev server info

Name         URL
---------------------------------------------------
local        http://192.168.1.4:9080
charan       http://9.109.207.198:9080
devserver    http://localhost:9080       [Default]
---------------------------------------------------
```