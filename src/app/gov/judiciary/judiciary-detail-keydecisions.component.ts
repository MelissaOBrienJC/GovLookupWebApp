import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IKeyDecisionsDto } from './judiciary';
import { JudiciaryService } from './judiciary.service';

@Component({
  moduleId: module.id,
  styleUrls: ['judiciary-detail-keydecisions.component.css'],
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
  }

}


