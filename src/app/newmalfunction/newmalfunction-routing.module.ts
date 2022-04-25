import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewmalfunctionPage } from './newmalfunction.page';

const routes: Routes = [
  {
    path: '',
    component: NewmalfunctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewmalfunctionPageRoutingModule {}
