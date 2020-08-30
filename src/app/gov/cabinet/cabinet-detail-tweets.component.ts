import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ICabinetDetailDto } from './cabinet';
import { CabinetService } from './cabinet.service';

@Component({
  moduleId: module.id,
  styleUrls: ['cabinet-detail-tweets.component.css'],
  templateUrl: 'cabinet-detail-tweets.component.html'

})
export class CabinetDetailTweetsComponent implements OnInit, AfterViewInit {

  cabinetMember: ICabinetDetailDto;
  constructor(private cabinetService: CabinetService) { }

  /*-----------------------------------------------------------------------
  --  ngOnInit()
  -----------------------------------------------------------------------*/
  ngOnInit(): void {
    this.cabinetMember = this.cabinetService.getCabinetMemberFromService();
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }
}


