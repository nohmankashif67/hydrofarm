import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillsdetailPageRoutingModule } from './billsdetail-routing.module';

import { BillsdetailPage } from './billsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillsdetailPageRoutingModule
  ],
  declarations: [BillsdetailPage]
})
export class BillsdetailPageModule {}
