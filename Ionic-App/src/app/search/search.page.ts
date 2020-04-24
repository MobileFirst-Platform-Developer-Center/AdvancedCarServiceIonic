import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Router,NavigationExtras } from '@angular/router';
import { GlobalProvider } from '../global-provider.service';
// import { ApiProvider } from '../providers/film';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  today = Date.parse(new Date().toISOString());
  queryText = '';
  refresh: any;
  showList = true;
  items: any;
  myuserDetails: any;

  constructor(
    private router: Router,
    public httpClient: HttpClient,
    // public globalProvider: GlobalProvider
  ) {
    console.log(this.router.getCurrentNavigation().extras.state.myitems);
    this.items = this.router.getCurrentNavigation().extras.state.myitems;

  }



  

  allData = [];
filterItems = [];

ionViewDidEnter(){
  // this.allData = this.locations.data;
  // this.items = this.router.getCurrentNavigation().extras.state.myitems;
  // this.filterItems = this.items;
}
  
  doRefresh() {
    console.log("Refreshing")
    this.httpClient
    .get(
      'http://192.168.1.100:3000/get'
    )
    .subscribe(data => {
      this.refresh = data;
      this.items = data;
      // this.items = this.items.users;
      console.log(this.refresh.org);
    });
    this.router.navigate(["search"], {
      state: { myitems: this.items.users }
    });
  }

  ionViewWillEnter() {
    console.log("Entered ionViewWillEnter")
    // this.items = this.router.getCurrentNavigation().extras.state.myitems;
   }
  userDetails(user: any) {
    console.log('Clicked User :', user.name);
    WL.Analytics.log({ CarService: 'userDetails' });
    WL.Analytics.send();
    this.myuserDetails = user;
    this.router.navigate(['user-details'], {state: { example: 'bar' , user: this.myuserDetails} });
  }

  setFilteredLocations() {
    alert('In Filter');
    this.filterItems = this.items.filter((name) => {
      return name.title.toLowerCase().indexOf(this.queryText.toLowerCase()) > -1;
    });
  }

  addUser() {
    WL.Analytics.log({ CarService: 'addUser' });
    WL.Analytics.send();
    // alert('clicked');
    this.router.navigate(['add-user'], {state: { example: 'bar' , myitems : this.items} });
  }


  about() { 
    WL.Analytics.log({ CarService: 'about' });
    WL.Analytics.send();
    // alert('clicked');
    this.router.navigate(['about'], {});
  }

  ngOnInit() {

  }


  logout() { 
    WL.Analytics.log({ CarService: 'logout' });
    WL.Analytics.send();
    this.router.navigate(['home'], {});
  }

  updateSchedule() {
    alert('hello');
  }

}
