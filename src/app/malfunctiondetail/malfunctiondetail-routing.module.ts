import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalfunctiondetailPage } from './malfunctiondetail.page';

const routes: Routes = [
  {
    path: '',
    component: MalfunctiondetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalfunctiondetailPageRoutingModule {}
