import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatemalfunctionPageRoutingModule } from './updatemalfunction-routing.module';

import { UpdatemalfunctionPage } from './updatemalfunction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatemalfunctionPageRoutingModule
  ],
  declarations: [UpdatemalfunctionPage]
})
export class UpdatemalfunctionPageModule {}
