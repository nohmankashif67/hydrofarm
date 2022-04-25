import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'totalmalfunctions',
    loadChildren: () => import('./totalmalfunctions/totalmalfunctions.module').then( m => m.TotalmalfunctionsPageModule)
  },
  {
    path: 'newmalfunction',
    loadChildren: () => import('./newmalfunction/newmalfunction.module').then( m => m.NewmalfunctionPageModule)
  },
  {
    path: 'completemalfunction',
    loadChildren: () => import('./completemalfunction/completemalfunction.module').then( m => m.CompletemalfunctionPageModule)
  },
  {
    path: 'solvedmalfunctions',
    loadChildren: () => import('./solvedmalfunctions/solvedmalfunctions.module').then( m => m.SolvedmalfunctionsPageModule)
  },

  {
    path: 'assignedmalfunctions',
    loadChildren: () => import('./assignedmalfunctions/assignedmalfunctions.module').then( m => m.AssignedmalfunctionsPageModule)
  },
  
  {
    path: 'bills/:id',
    loadChildren: () => import('./bills/bills.module').then( m => m.BillsPageModule)
  },
  {
    path: 'paidbills',
    loadChildren: () => import('./paidbills/paidbills.module').then( m => m.PaidbillsPageModule)
  },
  {
    path: 'unpaidbills',
    loadChildren: () => import('./unpaidbills/unpaidbills.module').then( m => m.UnpaidbillsPageModule)
  },
  {
    path: 'malfunctiondetail',
    loadChildren: () => import('./malfunctiondetail/malfunctiondetail.module').then( m => m.MalfunctiondetailPageModule)
  },
  {
    path: 'billsdetail/:id',
    loadChildren: () => import('./billsdetail/billsdetail.module').then( m => m.BillsdetailPageModule)
  },
  {
    path: 'paymentmodal',
    loadChildren: () => import('./paymentmodal/paymentmodal.module').then( m => m.PaymentmodalPageModule)
  },
  {
    path: 'updatemalfunction',
    loadChildren: () => import('./updatemalfunction/updatemalfunction.module').then( m => m.UpdatemalfunctionPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
