import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { JudiciaryService } from './judiciary.service';
import { JudiciaryListComponent } from './judiciary-list.component';
import { JudiciaryDetailComponent } from './judiciary-detail.component';
import { JudiciaryDetailKeyDecisionsComponent } from './judiciary-detail-keydecisions.component';
import { JudiciaryDetailKeyOpinionsComponent } from './judiciary-detail-keyopinions.component';
import { JudiciaryResolver } from './judiciary-resolver.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NgxSkeletonLoaderModule,
    RouterModule.forChild([
      { path: 'judiciary', component: JudiciaryListComponent, runGuardsAndResolvers: 'always' },
      {
        path: 'judiciary/:id', component: JudiciaryDetailComponent,
        resolve: { judgeResolved: JudiciaryResolver },
        runGuardsAndResolvers: 'always',


        children: [
          { path: '', redirectTo: 'keydecisions', pathMatch: 'full' },
          {
            path: 'keydecisions',
            component: JudiciaryDetailKeyDecisionsComponent
          },
          {
            path: 'keyopinions',
            component: JudiciaryDetailKeyOpinionsComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    JudiciaryListComponent,
    JudiciaryDetailComponent,
    JudiciaryDetailKeyDecisionsComponent,
    JudiciaryDetailKeyOpinionsComponent

  ],
  exports: [
    JudiciaryListComponent,
    JudiciaryDetailComponent,
    JudiciaryDetailKeyDecisionsComponent,
    JudiciaryDetailKeyOpinionsComponent

  ],
  providers: [
    JudiciaryService

  ]
})
export class JudiciaryModule { }
