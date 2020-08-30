
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PageNotFoundComponent } from './notFound/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './home/welcome.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HttpClientModule } from '@angular/common/http';

/* Feature Modules */
import { CongressModule } from './gov/congress/congress.module';
import { CabinetModule } from './gov/cabinet/cabinet.module';
import { JudiciaryModule } from './gov/judiciary/judiciary.module';
import { BillsModule } from './gov/bills/bills.module';


@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    CongressModule,
    CabinetModule,
    JudiciaryModule,
    BillsModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
    RouterModule,
    ScrollToModule.forRoot()
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AboutComponent
  ],

  bootstrap: [AppComponent]
})


export class AppModule { }
