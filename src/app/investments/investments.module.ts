import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentsComponent } from './investments.component';
import { OverviewComponent } from './overview/overview.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';

@NgModule({
  imports: [
    CommonModule,
    InvestmentsRoutingModule
  ],
  declarations: [InvestmentsComponent, OverviewComponent, TransactionsComponent, NewTransactionComponent]
})
export class InvestmentsModule { }
