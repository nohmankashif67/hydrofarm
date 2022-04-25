import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignedmalfunctionsPage } from './assignedmalfunctions.page';

const routes: Routes = [
  {
    path: '',
    component: AssignedmalfunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignedmalfunctionsPageRoutingModule {}
