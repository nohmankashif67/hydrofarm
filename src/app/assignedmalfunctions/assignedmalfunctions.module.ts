import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignedmalfunctionsPageRoutingModule } from './assignedmalfunctions-routing.module';

import { AssignedmalfunctionsPage } from './assignedmalfunctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignedmalfunctionsPageRoutingModule
  ],
  declarations: [AssignedmalfunctionsPage]
})
export class AssignedmalfunctionsPageModule {}
