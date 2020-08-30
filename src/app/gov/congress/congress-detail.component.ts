import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ILegislatorSummaryDto, ILegislatorDetailDto } from './legislator';
import { CongressService } from './congress.service';
import { MenuItem, MessageService } from 'primeng/api';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Subject } from 'rxjs';

import { takeUntil } from 'rxjs/operators';

@Component({
  moduleId: module.id,
  styleUrls: ['congress-detail.component.css'],
  templateUrl: 'congress-detail.component.html',

  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]

})


export class CongressDetailComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  pageTitle: string = 'Congresss Detail';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string;
  errorMessage: string;

  address: string;
  showDataList: boolean = false;
  // busy: Subscription;
  // emptyMessage: string;
  sub: any;
  url: SafeResourceUrl;
  options: any;
  selectedGroup: any;
  overlays: any[];
  navigationSubscription;
  items: MenuItem[];
  activeItem: MenuItem;
  index: number = -1;

  selectedRatingsGroup = 'all';
  ratingsGroups: any[];
  pic: any;
  data: any;
  legislators: ILegislatorSummaryDto[];
  legislator: ILegislatorDetailDto;
  legislator$: Subscription;

  chartOptions = {
    title: {
      display: true,
      text: 'Top five industries contributing to candidate',
      fontsize: 25
    },
    legend: {
      position: 'bottom'
    },
  };





  constructor(
    private _congressService: CongressService,
    private router: Router,
    private _sanitizer: DomSanitizer,

    private location: Location,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {



  }





  onTabClose(event) {
    this.messageService.add({ severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index })
  }

  onTabOpen(event) {
    this.messageService.add({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
  }

  filterRatings() {
    if (this.selectedRatingsGroup != 'all') {
      this.legislator.ratings.filter(
        type => this.selectedRatingsGroup);
    }

  }


  getURL(url): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {

    const legislatorResolved: ILegislatorDetailDto = this.route.snapshot.data['legislatorResolved'];
    this.legislator = legislatorResolved;
    this._congressService.setLegislator(legislatorResolved);
    this.items = [
      { label: 'Key Votes', icon: 'fa fa-check-circle', routerLink: ['keyvotes'] },
      { label: 'Voting Stats', icon: 'fa fa-bar-chart', routerLink: ['stats'] },
      { label: 'Bills', icon: 'fa fas fa-edit', routerLink: ['bills'] },
      { label: 'Committees', icon: 'fa fa-users', routerLink: ['committees'] }


    ];



    this.ratingsGroups = [
      { label: 'All', value: 'all' },
      { label: 'Progressive', value: 'progressive' },
      { label: 'Conservative', value: 'conservative' }

    ];
    this.activeItem = this.items[0];

  }

  /*-----------------------------------------------------------------------
     --  Get Legislator from web api
     -----------------------------------------------------------------------*/

  getLegislator(id: any) {

    this._congressService.getLegislatorFromWebApi(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.legislator = data;
        this._congressService.setLegislator(this.legislator);


      }
      );
  }







  ngOnDestroy() {
    if (this.legislator$) {
      this.legislator$.unsubscribe();
    }
  }



}
