import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IKeyVoteDto } from './legislator';
import { CongressService } from './congress.service';

@Component({
  styleUrls: ['congress-detail-keyvotes.component.css'],
  templateUrl: 'congress-detail-keyvotes.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: []

})
export class CongressDetailKeyVotesComponent implements OnInit {
  keyVotes: IKeyVoteDto[];
  constructor( private _congressService: CongressService ) { }












  ngOnInit(): void {

    this.keyVotes = this._congressService.getKeyVotesFromService();
    console.log( this.keyVotes );




  }





}


