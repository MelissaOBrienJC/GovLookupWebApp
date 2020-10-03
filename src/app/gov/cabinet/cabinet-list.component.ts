import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ICabinetDetailDto, ICabinetSummaryDto } from './cabinet';
import { CabinetService } from './cabinet.service';

@Component({
    styleUrls: ['../shared/shared.css'],
    templateUrl: 'cabinet-list.component.html',
    encapsulation: ViewEncapsulation.None

})
export class CabinetListComponent implements OnInit, OnDestroy {
    private ngUnsubscribe = new Subject();
    errorMessage: string;
    cabinetMembers: ICabinetSummaryDto[];
    showDataList = false;
    emptyMessage: string;
    cabinetSkeleton: ICabinetDetailDto[];


    /*-----------------------------------------------------------------------
    --  constructor dependecy injection happens here
    -----------------------------------------------------------------------*/

    constructor(
        private cabinetService: CabinetService,
        private router: Router) {
    }

    /*-----------------------------------------------------------------------
     --  ngOnInit()
     -----------------------------------------------------------------------*/
    ngOnInit(): void {

        this.cabinetMembers = this.cabinetService.getCabinetMembersFromService();
        this.showDataList = false;
        if (this.cabinetMembers != null) {

            this.showDataList = true;
        } else {
            console.log('find');
            this.findCabinetMembers('ALL');
        }
    }

    /*-----------------------------------------------------------------------
    --  findCabinetMembers called from html page to locate cabinet members
    --  based on entered text either name or address
    -----------------------------------------------------------------------*/

    findCabinetMembers(searchValue: string) {
        this.cabinetMembers = null;
        this.showDataList = true;

        this.cabinetService.getCabinetMembersFromWebApi()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (data: ICabinetSummaryDto[]) => this.cabinetMembers = data,
                error => this.findCabinetMembersCallError(),
                () => this.findCabinetMembersCallComplete());
    }

    findCabinetMembersCallComplete(): void {
        console.log('this.cabinetMembers');
        console.log(this.cabinetMembers);
        this.cabinetService.setCabinetMembers(this.cabinetMembers); // save to the service
        this.emptyMessage = 'No cabinet memers  found!';
        this.showDataList = true;

    }
    findCabinetMembersCallError(): void {
        console.log('error');
        console.log(this.cabinetMembers);
        this.cabinetMembers = null;

        this.showDataList = true;

    }

    /*-----------------------------------------------------------------------
    -- selectCabinetMember called from html page when user select the cabinet
    -- member they want to see details for
    -----------------------------------------------------------------------*/
    selectCabinet(cabinetMember: any) {
        this.cabinetService.setCabinetMember(cabinetMember);  // save to selected cabinet member to the service
        this.router.navigate(['/cabinet/' + cabinetMember.id]);

    }

    /*-----------------------------------------------------------------------
    --  ngOnDetstroy  unsubsribe here
    -----------------------------------------------------------------------*/
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    public generateSkeleton(count: number): Array<number> {
        console.log('generating skeleton');
        const indexes = [];
        for (let i = 0; i < count; i++) {
            indexes.push(i);
        }
        return indexes;
    }

}
