import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newvisit',
  templateUrl: './newvisit.page.html',
  styleUrls: ['./newvisit.page.scss'],
})
export class NewvisitPage implements OnInit {

  items: any;
  constructor(
    private router: Router,
  ) {
    console.log(this.router.getCurrentNavigation().extras.state.myitems);
    this.items = this.router.getCurrentNavigation().extras.state.myitems;
   }

  ngOnInit() {
  }

}
