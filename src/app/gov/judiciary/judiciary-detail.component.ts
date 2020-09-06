import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { MenuItem, MessageService } from 'primeng/api';
import { IJudiciaryDetailDto, IJudiciarySummaryDto } from './judiciary';
import { JudiciaryService } from './judiciary.service';

@Component({
  styleUrls: ['judiciary-detail.component.css'],
  templateUrl: 'judiciary-detail.component.html',
  providers: [MessageService]
})


export class JudiciaryDetailComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  items: MenuItem[];
  activeItem: MenuItem;
  judge: IJudiciaryDetailDto;


  constructor(
    private judiciaryService: JudiciaryService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {
  }


  /*-----------------------------------------------------------------------
   --  ngOnInit()
   -----------------------------------------------------------------------*/

  ngOnInit(): void {

    const judgeResolved: IJudiciaryDetailDto = this.route.snapshot.data['judgeResolved'];
    this.judge = judgeResolved;
    this.judiciaryService.setJudge(judgeResolved);


    this.items = [
      { label: 'Key Decisions', icon: 'fa fa-check-circle', routerLink: ['keydecisions'] },
      { label: 'Key Opinions', icon: 'fa fa-bar-chart', routerLink: ['keyopinions'] }

    ];
    this.activeItem = this.items[0];
  }
  onTabClose(event) {
    this.messageService.add({ severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index })
  }

  onTabOpen(event) {
    this.messageService.add({ severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index });
  }




}




