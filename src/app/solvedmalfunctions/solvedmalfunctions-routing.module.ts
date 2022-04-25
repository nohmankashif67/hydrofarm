import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolvedmalfunctionsPage } from './solvedmalfunctions.page';

const routes: Routes = [
  {
    path: '',
    component: SolvedmalfunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolvedmalfunctionsPageRoutingModule {}
