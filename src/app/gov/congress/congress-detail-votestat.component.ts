import { Component, OnInit ,OnDestroy, ViewEncapsulation }  from '@angular/core';
import { IVoteStatDto } from './legislator';
import { CongressService } from './congress.service';
import { ActivatedRoute , Router} from '@angular/router';
import { Location } from '@angular/common';


@Component ({
       styleUrls: ['congress-detail-votestat.component.css'],
       templateUrl: 'congress-detail-votestat.component.html',

    encapsulation: ViewEncapsulation.None,
    providers: []

})
export class CongressDetailVoteStatComponent implements OnInit  {

    voteStat: IVoteStatDto;
    partyGaugeType: string;
    partyGaugeValue : any;
    partyGaugeLabel : string;
    partyGaugeAppendText : string;
    partyGaugeForegroundColor : string;

    gaugeType: string;
    gaugeValue : any;
    gaugeLabel : string;
    gaugeAppendText : string;
    gaugeForegroundColor : string;
   constructor(
        private _congressService: CongressService ) {}


        ngOnInit(): void {
        this.voteStat = this._congressService.getVoteStatFromService();

        this.partyGaugeType = 'semi';
        this.partyGaugeValue = this.voteStat.votesWithPartyPct;
        this.partyGaugeLabel = 'Votes with party';
        this.partyGaugeAppendText = '%';
        this.partyGaugeForegroundColor = 'rgb(0, 0, 255)';

        this.gaugeType = 'semi';
        this.gaugeValue = this.voteStat.missedVotesPct;
        this.gaugeLabel = 'Missed Vote';
        this.gaugeAppendText = '%';
        this.gaugeForegroundColor = 'rgb(0, 0, 255)';
   }
}
