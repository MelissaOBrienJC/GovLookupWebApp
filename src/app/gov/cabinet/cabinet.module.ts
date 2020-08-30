import { NgModule } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';

import { CabinetService } from './cabinet.service';
import { CabinetResolver } from './cabinet-resolver.service';
import { CabinetListComponent } from './cabinet-list.component';
import { CabinetDetailComponent } from './cabinet-detail.component';
import { CabinetDetailDescriptionComponent } from './cabinet-detail-description.component';
import { CabinetDetailCvComponent } from './cabinet-detail-cv.component';
import { CabinetDetailTweetsComponent } from './cabinet-detail-tweets.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
     SharedModule,
     NgxSkeletonLoaderModule,
     RouterModule.forChild([
      { path: 'cabinet', component: CabinetListComponent,  runGuardsAndResolvers: 'always'} ,
      { path: 'cabinet/:id', component: CabinetDetailComponent,
              resolve: { cabinetMemberResolved: CabinetResolver},
              runGuardsAndResolvers: 'always',
        children: [
           { path: '', redirectTo: 'description', pathMatch: 'full' },
          {
            path: 'description',
            component: CabinetDetailDescriptionComponent
          },
          {
            path: 'cv',
            component:   CabinetDetailCvComponent
          },
          {
            path: 'tweets',
            component:   CabinetDetailTweetsComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    CabinetListComponent,
    CabinetDetailComponent,
    CabinetDetailDescriptionComponent,
    CabinetDetailCvComponent,
    CabinetDetailTweetsComponent
  ],
   exports:[
     CabinetListComponent,
     CabinetDetailComponent,
     CabinetDetailDescriptionComponent,
     CabinetDetailCvComponent,
     CabinetDetailTweetsComponent

  ],
  providers: [
    CabinetService,
    CabinetResolver

  ]
})
export class CabinetModule { }
