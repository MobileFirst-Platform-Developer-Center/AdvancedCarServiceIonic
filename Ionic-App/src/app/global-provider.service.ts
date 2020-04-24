import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
// this is a global variable
  public url = 'http://172.16.137.17/';
  public globalItems ;

  constructor(public http: HttpClient) {
    this.http.get('https://api.myjson.com/bins/7d7fc').subscribe(data => {
      this.globalItems = data;
      console.log('my from global data: ', this.globalItems);
    });
    console.log('Hello GlobalProvider Provider');
  }

}
