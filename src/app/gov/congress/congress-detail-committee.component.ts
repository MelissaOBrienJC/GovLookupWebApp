import { Component, Input, OnInit ,OnDestroy, ViewEncapsulation, PipeTransform }  from '@angular/core';
import { ILegislatorDetailDto, ICommitteeDto } from './legislator';
import { CongressService }  from './congress.service';

import {TabViewModule} from 'primeng/tabview';

import {PanelModule} from 'primeng/panel';

import { ActivatedRoute , RouterModule, Router} from '@angular/router';


import { CongressModule } from './congress.module';
import { Location } from '@angular/common';


@Component ({
    moduleId: module.id,
    styleUrls: ['congress-detail-committee.component.css'],
       templateUrl: 'congress-detail-committee.component.html',

    encapsulation: ViewEncapsulation.None,
    providers: []

})
export class CongressDetailCommitteeComponent implements OnInit  {
     committees: ICommitteeDto[];







   constructor(
        private _congressService: CongressService,


       ) { }












   ngOnInit(): void {
    this.committees = this._congressService.getCommitteesFromService();
   }




}
