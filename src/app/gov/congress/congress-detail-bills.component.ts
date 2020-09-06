import { Component, OnInit , ViewEncapsulation,  } from '@angular/core';
import {  IBillDto } from './legislator';
import { CongressService } from './congress.service';
import {SelectItem} from 'primeng/api';

@Component ({
       styleUrls: ['congress-detail-bills.component.css'],
       templateUrl: 'congress-detail-bills.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: []

})
export class CongressDetailBillsComponent implements OnInit  {
  bills: IBillDto[];
  sponsorTypes: SelectItem[];
  selectedSponsorType: string;

   constructor(
        private _congressService: CongressService


       ) {


        this.sponsorTypes = [

            {label: 'Sponsor', value: 'S'},
            {label: 'CoSponsor', value: 'C'}
        ]

        ; }












   ngOnInit(): void {
    this.bills = this._congressService.getBillsFromService();
        this.selectedSponsorType = "S";



   }




}
