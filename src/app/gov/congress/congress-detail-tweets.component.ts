import { Component, OnInit, AfterViewInit } from '@angular/core';
import {  ILegislatorDetailDto } from './legislator';
import { CongressService } from './congress.service';

@Component({
  styleUrls: ['congress-detail-tweets.component.css'],
  templateUrl: 'congress-detail-tweets.component.html'

})
export class CongressDetailTweetsComponent implements OnInit, AfterViewInit {

  legislator: ILegislatorDetailDto;
  constructor(private _congressService: CongressService) { }

  /*-----------------------------------------------------------------------
  --  ngOnInit()
  -----------------------------------------------------------------------*/
  ngOnInit(): void {
    this.legislator = this._congressService.getLegislatorFromService();
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }
}


