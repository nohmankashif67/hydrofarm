import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalmalfunctionsPageRoutingModule } from './totalmalfunctions-routing.module';

import { TotalmalfunctionsPage } from './totalmalfunctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalmalfunctionsPageRoutingModule
  ],
  declarations: [TotalmalfunctionsPage]
})
export class TotalmalfunctionsPageModule {}
