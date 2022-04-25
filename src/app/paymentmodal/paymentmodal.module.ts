import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentmodalPageRoutingModule } from './paymentmodal-routing.module';

import { PaymentmodalPage } from './paymentmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentmodalPageRoutingModule
  ],
  declarations: [PaymentmodalPage]
})
export class PaymentmodalPageModule {}
