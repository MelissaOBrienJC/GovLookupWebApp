import { Component, OnInit } from '@angular/core';
import { ICabinetDetailDto } from './cabinet';
import { CabinetService } from './cabinet.service';

@Component({
  moduleId: module.id,
  styleUrls: [],
  templateUrl: 'cabinet-detail-description.component.html'


})
export class CabinetDetailDescriptionComponent implements OnInit {
  cabinetMember: ICabinetDetailDto;

  constructor(private cabinetService: CabinetService) { }



  /*-----------------------------------------------------------------------
  --  ngOnInit()
  -----------------------------------------------------------------------*/
  ngOnInit(): void {
    this.cabinetMember = this.cabinetService.getCabinetMemberFromService();
  }


}


