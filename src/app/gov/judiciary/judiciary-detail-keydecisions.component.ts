import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IKeyDecisionsDto } from './judiciary';
import { JudiciaryService } from './judiciary.service';

@Component({
    styleUrls: ['judiciary-detail-keydecisions.component.css', '../shared/shared.css'],
    templateUrl: 'judiciary-detail-keydecisions.component.html',
    encapsulation: ViewEncapsulation.None
})

export class JudiciaryDetailKeyDecisionsComponent implements OnInit {

    keyDecisions: IKeyDecisionsDto[];

    constructor(
        private judiciaryService: JudiciaryService,
        private route: ActivatedRoute
    ) {
    }

    /*-----------------------------------------------------------------------
    --  ngOnInit()
    -----------------------------------------------------------------------*/
    ngOnInit(): void {
        this.keyDecisions = this.judiciaryService.getKeyDecisionsFromService();
        console.log(this.keyDecisions);
    }

}


