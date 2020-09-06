import { Component, Input, OnInit ,OnDestroy, ViewEncapsulation, PipeTransform }  from '@angular/core';
import {  ICommitteeDto } from './legislator';
import { CongressService }  from './congress.service';


@Component ({
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
