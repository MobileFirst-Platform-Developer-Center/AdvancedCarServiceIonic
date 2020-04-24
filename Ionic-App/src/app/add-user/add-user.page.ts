import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  today = Date.now();
  datebirth: number = new Date().getTime();


  user = {
    name: '',
    org: '',
    plate: '',
    model: '',
    date: '',
    status: ''
  };
  constructor(
    public httpClient: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {
  }

  format(val) {
    return new Date(val).getTime();
  }

  register(form: any) {

    WL.Analytics.log({ CarService: 'register' });
    WL.Analytics.send();

    alert('Registered New User');

    this.httpClient
      .post(
        'http://9.109.207.198:3000/submit', this.user
    )
    .subscribe(data => {

      console.log('Latest Data :', data)
      this.router.navigate(['search'], {
        state: {myitems: data }

      });
    });
  }
}
