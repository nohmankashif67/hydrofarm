import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatemalfunctionPage } from './updatemalfunction.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatemalfunctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatemalfunctionPageRoutingModule {}
