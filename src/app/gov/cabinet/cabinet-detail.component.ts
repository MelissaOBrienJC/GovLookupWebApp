import { Component,  OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuItem, MessageService} from 'primeng/api';
import { ICabinetDetailDto, ICabinetSummaryDto } from './cabinet';
import { CabinetService } from './cabinet.service';

@Component ({
    moduleId: module.id,
    styleUrls: ['cabinet-detail.component.css'],
       templateUrl: 'cabinet-detail.component.html',
       providers: [MessageService]

})


export class CabinetDetailComponent implements OnInit  {
    items: MenuItem[];
    activeItem: MenuItem;
    cabinetMember: ICabinetDetailDto;


   constructor(
         private cabinetService: CabinetService,
         private route: ActivatedRoute,
         private messageService: MessageService
       ) {
      }


  /*-----------------------------------------------------------------------
   --  ngOnInit()
   -----------------------------------------------------------------------*/

    ngOnInit(): void {

      const cabinetMemberResolved: ICabinetDetailDto = this.route.snapshot.data['cabinetMemberResolved'];
      this.cabinetMember =  cabinetMemberResolved;
      this.cabinetService.setCabinetMember(cabinetMemberResolved);

      this.items = [
          {label: 'Info', icon: 'fa fa-info-circle' ,routerLink: ['description']},
          {label: 'Job History', icon: 'fa fa-file' ,routerLink: ['cv']},
          {label: 'Tweets', icon: 'fa fa-twitter' ,routerLink: ['tweets']}

      ];
      this.activeItem = this.items[0];
}
       onTabClose(event) {
           this.messageService.add({severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index})
       }

       onTabOpen(event) {
           this.messageService.add({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
       }



}




