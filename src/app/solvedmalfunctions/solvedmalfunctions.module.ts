import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolvedmalfunctionsPageRoutingModule } from './solvedmalfunctions-routing.module';

import { SolvedmalfunctionsPage } from './solvedmalfunctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolvedmalfunctionsPageRoutingModule
  ],
  declarations: [SolvedmalfunctionsPage]
})
export class SolvedmalfunctionsPageModule {}
