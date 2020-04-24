import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {


  myglobal: any;
  globalItems: any;

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
}
