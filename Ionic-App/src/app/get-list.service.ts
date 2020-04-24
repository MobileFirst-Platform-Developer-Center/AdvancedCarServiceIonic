import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetListService {

  public GlobalState: any;
  constructor(
    public httpClient: HttpClient
  ) {

    this.httpClient

    .get(
      'http://localhost:3000/get'
    )
    .subscribe(data => {
      this.GlobalState = data;
      console.log("my Global data: ", this.GlobalState.org);
    });
   }
}
