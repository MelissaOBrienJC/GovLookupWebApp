import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IJudiciarySummaryDto } from './judiciary';
import { JudiciaryService } from './judiciary.service';

@Component({
  styleUrls: ['../shared/shared.css'],
  templateUrl: 'judiciary-list.component.html',
  encapsulation: ViewEncapsulation.None

})
export class JudiciaryListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  errorMessage: string;
  judges: IJudiciarySummaryDto[];
  showDataList = false;
  emptyMessage: string;
  judgeSkeleton: IJudiciarySummaryDto[];


  /*-----------------------------------------------------------------------
  --  constructor dependecy injection happens here
  -----------------------------------------------------------------------*/

  constructor(
    private judiciaryService: JudiciaryService,
    private router: Router) {
  }

  /*-----------------------------------------------------------------------
   --  ngOnInit()
   -----------------------------------------------------------------------*/
  ngOnInit(): void {

    this.judges = this.judiciaryService.getJudgesFromService();
    this.showDataList = false;
    if (this.judges != null) {
      this.showDataList = true;
    } else {
      this.findJudges();
    }
  }

  /*-----------------------------------------------------------------------
  --  findJudgescalled from html page to locate judge
  --  based on entered text either name or address
  -----------------------------------------------------------------------*/

  findJudges() {
    this.judges = null;
    this.showDataList = true;

    this.judiciaryService.getJudgesFromWebApi()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (data: IJudiciarySummaryDto[]) => this.judges = data,
        error => this.errorMessage = <any>error,
        () => this.findJudgesCallComplete());
  }

  findJudgesCallComplete(): void {
    this.judiciaryService.setJudges(this.judges); // save to the service
    this.emptyMessage = 'No judges found!';
    this.showDataList = true;

  }

  /*-----------------------------------------------------------------------
  -- selectJudge called from html page when user select the judge
  --  they want to see details for
  -----------------------------------------------------------------------*/
  selectJudge(judge: any) {
    this.judiciaryService.setJudge(judge);  // save to selected legslator to the service
    this.router.navigate(['/judiciary/' + judge.id]);

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
