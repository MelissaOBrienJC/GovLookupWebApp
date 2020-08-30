import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IKeyDecisionsOpinionsDto } from './judiciary';
import { JudiciaryService } from './judiciary.service';

@Component({
  moduleId: module.id,
  styleUrls: ['judiciary-detail-keyopinions.component.css'],
  templateUrl: 'judiciary-detail-keyopinions.component.html',
  encapsulation: ViewEncapsulation.None

})
export class JudiciaryDetailKeyOpinionsComponent implements OnInit {
  keyDecisionsOpinions: IKeyDecisionsOpinionsDto[];
  lastName: string;

  constructor(private judiciaryService: JudiciaryService) { }



  /*-----------------------------------------------------------------------
  --  ngOnInit()
  -----------------------------------------------------------------------*/
  ngOnInit(): void {
    this.keyDecisionsOpinions = this.judiciaryService.getKeyDecisionsOpinionsFromService();
    this.lastName = this.judiciaryService.getJudgeLastNameFromService();
  }


}


