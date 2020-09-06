import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { IJobPositionDto } from './cabinet';
import { CabinetService } from './cabinet.service';

@Component ({
    styleUrls: [],
    templateUrl: 'cabinet-detail-cv.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: []

})
export class CabinetDetailCvComponent implements OnInit  {
     jobHistory: IJobPositionDto[];

     constructor( private cabinetService: CabinetService) { }



  /*-----------------------------------------------------------------------
  --  ngOnInit() - get job history for display
  -----------------------------------------------------------------------*/

  ngOnInit(): void {
      this.jobHistory = this.cabinetService.getJobHistoryFromService();
   }
}


