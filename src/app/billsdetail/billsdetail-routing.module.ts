import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsdetailPage } from './billsdetail.page';

const routes: Routes = [
  {
    path: '',
    component: BillsdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillsdetailPageRoutingModule {}
