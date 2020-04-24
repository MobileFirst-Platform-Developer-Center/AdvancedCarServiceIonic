import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  user: any;
  bookingdate: any = new Date().toISOString();

  // myglobal: any;
  constructor(
    public router: Router,
    public myservice: MyserviceService,
  ) {

    console.log(this.router.getCurrentNavigation().extras.state.user);
    this.user = this.router.getCurrentNavigation().extras.state.user;
  }

  ngOnInit() {
    // this.myglobal = this.myservice.myglobal;
  }


  onBook() { 
    WL.Analytics.log({ CarService: 'BookingToday' });
    WL.Analytics.send();
    alert('Booking Done..!!');
  }
  backPage() {
    console.log('Go Back ');
    this.router.navigate(['search'], {
    });
  }

}
