import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { CongressListComponent } from './congress-list.component';
import { CongressDetailComponent } from './congress-detail.component';
import { CongressDetailKeyVotesComponent } from './congress-detail-keyvotes.component';
import { CongressDetailVoteStatComponent } from './congress-detail-votestat.component';
import { CongressDetailBillsComponent } from './congress-detail-bills.component';
import { CongressDetailCommitteeComponent } from './congress-detail-committee.component';
import { CongressDetailTweetsComponent } from './congress-detail-tweets.component';
import { SharedModule } from '../shared/shared.module';
import { CongressService } from './congress.service';
import { CongressResolver } from './congress-resolver.service';


@NgModule({
  imports: [
     SharedModule,
     NgxSkeletonLoaderModule,
    RouterModule.forChild([
      { path: 'legislators', component: CongressListComponent,  runGuardsAndResolvers: 'always'},
      { path: 'legislators/:id' , component: CongressDetailComponent,
      resolve: { legislatorResolved: CongressResolver},
      runGuardsAndResolvers: 'always',
        children: [
           { path: '', redirectTo: 'keyvotes', pathMatch: 'full' },
          {
            path: 'keyvotes',
            component: CongressDetailKeyVotesComponent
          },
          {
            path: 'stats',
            component:  CongressDetailVoteStatComponent
          },
          {
            path: 'bills',
            component:  CongressDetailBillsComponent
          },
          {
            path: 'committees',
            component:  CongressDetailCommitteeComponent
          },
          {
            path: 'tweets',
            component:   CongressDetailTweetsComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    CongressListComponent,
    CongressDetailComponent,
    CongressDetailKeyVotesComponent,
    CongressDetailBillsComponent,
    CongressDetailCommitteeComponent,
    CongressDetailVoteStatComponent


  ],
   exports:[
     CongressListComponent,
    CongressDetailComponent,
    CongressDetailKeyVotesComponent,
    CongressDetailBillsComponent,
    CongressDetailCommitteeComponent,
    CongressDetailVoteStatComponent

  ],
  providers: [

    CongressService
  ]
})
export class CongressModule { }
