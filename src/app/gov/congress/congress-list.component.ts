import { Component, OnInit , ViewEncapsulation, PipeTransform, OnDestroy }  from '@angular/core';
import { ILegislatorSummaryDto, ILegislatorDetailDto} from './legislator';
import { CongressService }  from './congress.service';
import { DomSanitizer} from '@angular/platform-browser';
import { Subscription} from 'rxjs';
import { Subject} from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import {  ActivatedRoute } from '@angular/router';

@Component ({
    styleUrls: ['../shared/shared.css'],
    templateUrl: 'congress-list.component.html',
    encapsulation: ViewEncapsulation.None,
        providers: []

})
export class CongressListComponent implements OnInit , OnDestroy{
  private ngUnsubscribe = new Subject();
    private route: ActivatedRoute;

    pageTitle: string = 'Congresss List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    legislators: ILegislatorSummaryDto[];

    legislator: ILegislatorDetailDto;
    address: string;
    showDataList: boolean = false;
    emptyMessage: string;
    //url: SafeResourceUrl;
    options: any;
    //pic: any;

    legislators$: Subscription;
    legislator$ : Subscription;
    overlays: any[];




    /*-----------------------------------------------------------------------
    --  constructor dependecy injection happens here
    -----------------------------------------------------------------------*/

   constructor(
        private _congressService: CongressService,
         private _sanitizer: DomSanitizer,
         private router: Router

       ) {

   }

   /*-----------------------------------------------------------------------
    --  ngOnInit()
    -----------------------------------------------------------------------*/
    ngOnInit(): void {

        this.legislators =  this._congressService.getLegislatorsFromService();
        if (this.legislators != null)
        {
          this.showDataList = true;
        }
   }

  /*-----------------------------------------------------------------------
    --  findJudgescalled from html page to locate judge
    --  based on entered text either name or address
    -----------------------------------------------------------------------*/

    findLegislators(searchValue: string)
     {
        this.legislators = null;
        this.showDataList = true;

        this._congressService.getLegislatorsFromWebApi(searchValue)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
            (data: ILegislatorSummaryDto[]) => this.legislators = data,
              error => this.errorMessage = <any>error,
              () =>  this.findLegislatorsCallComplete() );
      }

    findLegislatorsCallComplete(): void {

        this._congressService.setLegislators(this.legislators); // save to the service
        this.emptyMessage = 'No legislators found!';
        this.showDataList = true;

    }

    /*-----------------------------------------------------------------------
    -- selectLegislator called from html page when user select the legislator
    --  they want to see details for
    -----------------------------------------------------------------------*/
     selectLegislator(legislator: any) {
        this._congressService.setLegislator(legislator);  // save to selected legslator to the service
        this.router.navigate(['/legislators/' + legislator.id  ]);

    }

    /*-----------------------------------------------------------------------
    --  ngOnDetstroy  unsubsribe here
    -----------------------------------------------------------------------*/
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
      }




   public generateSkeleton(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }
}
