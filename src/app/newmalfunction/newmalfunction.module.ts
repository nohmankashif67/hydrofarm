import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewmalfunctionPageRoutingModule } from './newmalfunction-routing.module';

import { NewmalfunctionPage } from './newmalfunction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewmalfunctionPageRoutingModule
  ],
  declarations: [NewmalfunctionPage]
})
export class NewmalfunctionPageModule {}
