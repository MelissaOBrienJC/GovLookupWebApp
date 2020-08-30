import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BillsService } from './bills.service';
import { BillsListComponent } from './bills-list.component';


import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NgxSkeletonLoaderModule,
    RouterModule.forChild([
      { path: 'bills', component: BillsListComponent, runGuardsAndResolvers: 'always' },

    ])
  ],
  declarations: [
    BillsListComponent
  ],
  exports: [
    BillsListComponent
  ],
  providers: [
    BillsService

  ]
})
export class BillsModule { }
