import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) { }
  // getFilms() {
  //   return this.http.get('https://swapi.co/api/films');
  // }
  // getList(){
  //   this.http.get('https://api.myjson.com/bins/7d7fc').subscribe(data => {
  //     this.items = data;
  //     console.log('my data: ', this.items);
  //   });
  // }

  getList() {
    return this.http.get('https://api.myjson.com/bins/7d7fc')
    .pipe(map((response: any) => response.json()));
  }

}
