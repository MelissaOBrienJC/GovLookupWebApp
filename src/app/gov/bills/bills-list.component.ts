import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ICurrentBillsyDto } from './bills';
import { BillsService } from './bills.service';

@Component({
    styleUrls: ['../shared/shared.css'],
    templateUrl: 'bills-list.component.html',
    encapsulation: ViewEncapsulation.None

})
export class BillsListComponent implements OnInit, OnDestroy {
    private ngUnsubscribe = new Subject();
    errorMessage: string;
    bills: ICurrentBillsyDto[];
    showDataList = false;
    emptyMessage: string;
    billsSkeleton: ICurrentBillsyDto[];


    /*-----------------------------------------------------------------------
    --  constructor dependecy injection happens here
    -----------------------------------------------------------------------*/

    constructor(
        private billsService: BillsService,
        private router: Router) {
    }

    /*-----------------------------------------------------------------------
     --  ngOnInit()
     -----------------------------------------------------------------------*/
    ngOnInit(): void {

        this.bills = this.billsService.getBillsFromService();
        this.showDataList = false;
        if (this.bills != null) {
            this.showDataList = true;
        } else {
            this.getBills();
        }
    }

    /*-----------------------------------------------------------------------
    --  getBills scalled from html page to get  bills
    -----------------------------------------------------------------------*/

    getBills() {
        this.bills = null;
        this.showDataList = true;

        this.billsService.getBillsFromWebApi()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (data: ICurrentBillsyDto[]) => this.bills = data,
                error => this.errorMessage = <any>error,
                () => this.getBillsCallComplete());
    }

    getBillsCallComplete(): void {
        this.billsService.setBills(this.bills); // save to the service
        this.emptyMessage = 'No bills found!';
        this.showDataList = true;

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
