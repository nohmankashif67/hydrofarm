import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalfunctiondetailPageRoutingModule } from './malfunctiondetail-routing.module';

import { MalfunctiondetailPage } from './malfunctiondetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalfunctiondetailPageRoutingModule
  ],
  declarations: [MalfunctiondetailPage]
})
export class MalfunctiondetailPageModule {}
