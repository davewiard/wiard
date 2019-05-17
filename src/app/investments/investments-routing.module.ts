import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentsComponent } from './investments.component';
import { OverviewComponent } from './overview/overview.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { TransactionsComponent } from './transactions/transactions.component';

const investmentsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: '',
    component: InvestmentsComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'new',
        component: NewTransactionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(investmentsRoutes)],
  exports: [RouterModule]
})
export class InvestmentsRoutingModule { }
