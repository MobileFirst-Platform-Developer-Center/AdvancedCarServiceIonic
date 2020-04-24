cordova.define("cordova-plugin-mfp-push.MFPPush", function(require, exports, module) {
/*
   Licensed Materials - Property of IBM

   (C) Copyright 2016 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
var exec = require('cordova/exec');

var failure = function(res) {
	alert(res);
}

var MFPPush = {
		
	/**
	 * Initializes MFPPush instance. This is required for the client application to connect to MFPPush service with the right
	 * application context. This API should be called first before using other MFPPush APIs.
	 * 
	 * @param success callback
	 * @param failure callback 
	 * @param timeout request timeout in seconds
	 */
		initialize: function(success, failure, options, timeout) {
			if (typeof timeout !== "undefined" && typeof timeout === "number" && timeout === parseInt(timeout, 10)) {
				if (typeof options !== "undefined" && options !== null ) {
					cordova.exec(success, failure, "MFPPushPlugin", "initialize", [timeout,options]);
				} else {
					cordova.exec(success, failure, "MFPPushPlugin", "initialize", [timeout]);
				}
			} else if ( typeof options !== "undefined" && options !== null ) {
				cordova.exec(success, failure, "MFPPushPlugin", "initialize", [-1,options]);
			}
			else {
				cordova.exec(success, failure, "MFPPushPlugin", "initialize", [-1]);
			}
		},		
	
	/**
	 * Checks whether Push Notification is supported on the device
	 * 
	 * @param success callback
	 * @param failure callback 
	 */
	isPushSupported: function(success, failure) {
		cordova.exec(success, failure, "MFPPushPlugin", "isPushSupported", []);
	},

	/**
	 * Retrieves all the subscriptions of the device 
	 * 
	 * @param success callback - recieves array of subscribed tags
	 * @param failure callback 
	 */
	getSubscriptions: function(success, failure) {
		cordova.exec(success, failure, "MFPPushPlugin", "getSubscriptions", []);
	},

	/**
	 * Retrieves all the available tags of the application
	 * 
	 * @param success callback
	 * @param failure callback
	 */
	getTags: function(success, failure) {
		cordova.exec(success, failure, "MFPPushPlugin", "getTags", []);
	},

	/**
	 * Subscribes the device to the given tags
	 * 
	 * @param tags - The Tag array to subscribe to.
	 * @param success callback
	 * @param failure callback
	 */

	subscribe: function(tags, success, failure) {
		cordova.exec(success, failure, "MFPPushPlugin", "subscribe", [tags.toString()]);
	},

	/**
	 * Unsubscribes the device from the given tags
	 * 
	 * @param  tags - The Tag name array to unsubscribe from.
	 * @param  success callback
	 * @param  failure callback
	 */

	unsubscribe: function(tags, success, failure) {
		cordova.exec(success, failure, "MFPPushPlugin", "unsubscribe", [tags.toString()]);
	},
	
	/**
	 * Registers the device with the push service
	 *
	 * @param options:
	 *        ios: {  alert: boolean, badge: boolean, sound: boolean, categories: object[] }
	 *        android: {}
	 *  	  phoneNumber: String 
	 *		  
	 *		  where 
	 *				phoneNumber - Phone number to receive the SMS based notifications
	 *				alert - To enable displaying alert messages
	 *				badge - To enable badge icons
	 *				sound - To enable playing sound
	 *				categories - iOS8 interactive notification categories 
	 *		  for example,
	 *			{
	 *				ios: {
	 *					alert: true,
	 *					badge: true,
	 *					sound: true,	 
	 *		  			categories: [{
	 *							//Category identifier, this is used while sending the notification.
	 *							id : "poll", 
	 *							//Optional array of actions to show the action buttons along with the message.	
	 *							actions: [
	 *								 {
	 *    								//Action identifier
	 *   								 id : "poll_ok", 
	 *  
	 *   								//Action title to be displayed as part of the notification button.
	 *    								title : "OK", 
	 *			
	 *									//Optional mode to run the action in foreground or background. 1-foreground. 0-background. Default is foreground.
	 *			   						 mode: 1,  
	 *  
	 *    								//Optional property to mark the action button in red color. Default is false.
	 *    								destructive: false,
	 *  
	 *    								//Optional property to set if authentication is required or not before running the action.(Screen lock).
	 *    								//For foreground, this property is always true.
	 *    								authenticationRequired: true
	 *  							},
	 *  							{
	 *    								id : "poll_nok",
	 *  								title : "NOK",
	 *   								mode: 1,
	 *   								destructive: false,
	 *   								authenticationRequired: true
	 *  							}	
	 *							],
	 *    						//Optional list of actions that is needed to show in the case alert. 
	 *    						//If it is not specified, then the first four actions will be shown.
	 *    						defaultContextActions: ['poll_ok','poll_nok'],
	 *    
	 *    						//Optional list of actions that is needed to show in the notification center, lock screen. 
	 *    						//If it is not specified, then the first two actions will be shown.
	 *    						minimalContextActions: ['poll_ok','poll_nok'] 
  	 *					}] 	
  	 *				},
  	 *				android: {
  	 *				},
  	 *				phoneNumber: "999999999"
  	 *			}	
  	 *				 
	 * @param success callback
	 * @param failure callback
	 */
	registerDevice: function(options,success, failure) {
		if (options === null || options === "undefined") {
			cordova.exec(success, failure, "MFPPushPlugin", "registerDevice", [{}]);
		} else {
			cordova.exec(success, failure, "MFPPushPlugin", "registerDevice", [options]);
		}
	},

	/**
	 * Unregisters the device from the push service
	 * 
	 * @param success callback
	 * @param failure callback
	 */
	unregisterDevice: function(success, failure) {
		cordova.exec(success, failure, "MFPPushPlugin", "unregisterDevice", []);
	},

	/**
	 * Registers the callback method used for receiving the notifications
	 * 
	 * @param callback The callback function that receives the notification 
	 */
	registerNotificationsCallback: function(callback) {
		cordova.exec(callback, null, "MFPPushPlugin", "registerNotificationsCallback", []);
	},

    /**
     * Completes the background job after receving the silent notification. This API is applicable for iOS environment. 
     * When the silent notification arrives and the background job is completed, need to call this method to notify that
     * the background job is completed.
     *
     * @param id  callback-id received as part of notification properties.
     * @param result of background activity
     */
    backgroundJobDone: function(id, result) {
        if(result == "undefined" || isNaN(result)){
            result = 1;
        }
        cordova.exec(null,null,"MFPPushPlugin","backgroundJobDone", [id, result]);
    }
};

module.exports = MFPPush;
});
