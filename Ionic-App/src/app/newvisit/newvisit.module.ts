import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewvisitPageRoutingModule } from './newvisit-routing.module';

import { NewvisitPage } from './newvisit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewvisitPageRoutingModule
  ],
  declarations: [NewvisitPage]
})
export class NewvisitPageModule {}
