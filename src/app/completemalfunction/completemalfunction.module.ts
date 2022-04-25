import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletemalfunctionPageRoutingModule } from './completemalfunction-routing.module';

import { CompletemalfunctionPage } from './completemalfunction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletemalfunctionPageRoutingModule
  ],
  declarations: [CompletemalfunctionPage]
})
export class CompletemalfunctionPageModule {}
