import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalmalfunctionsPage } from './totalmalfunctions.page';

const routes: Routes = [
  {
    path: '',
    component: TotalmalfunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalmalfunctionsPageRoutingModule {}
