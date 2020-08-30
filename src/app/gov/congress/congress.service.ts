import { Injectable, OnDestroy } from '@angular/core';
import { ILegislatorSummaryDto, ILegislatorDetailDto, IKeyVoteDto, ICommitteeDto, IVoteStatDto, IBillDto } from './legislator';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CongressService   {


    _legislator: ILegislatorDetailDto;
    _legislators:  ILegislatorSummaryDto[];

    private _govLookuplegislatorUrl = 'https://govlookupwebapi.mobdemo.org:443/api/legislators';



    constructor( private _http: HttpClient){  }

    /*-----------------------------------------------------------------------
    --  getLegilatorsFromService
    -----------------------------------------------------------------------*/
    public getLegislatorsFromService(): ILegislatorSummaryDto[] {
        return this._legislators;
    }

     /*-----------------------------------------------------------------------
    --  getLegilatorFromService
    -----------------------------------------------------------------------*/
    public getLegislatorFromService(): ILegislatorDetailDto{
         return this._legislator;
    }

    /*-----------------------------------------------------------------------
    --  getKeyVotesFromService
    -----------------------------------------------------------------------*/
    public getKeyVotesFromService():  IKeyVoteDto[] {

      return this._legislator.keyVotes;
  }

    /*-----------------------------------------------------------------------
    --  getBillsFromService
    -----------------------------------------------------------------------*/
    public getBillsFromService():  IBillDto[] {

      return this._legislator.bills;
  }

   /*-----------------------------------------------------------------------
    --  getVoteStatFromService
    -----------------------------------------------------------------------*/
    public getVoteStatFromService():  IVoteStatDto {
      return this._legislator.voteStat;
  }

    /*-----------------------------------------------------------------------
    --  getCommitteesFromService
    -----------------------------------------------------------------------*/
    public getCommitteesFromService():  ICommitteeDto[]{

      return this._legislator.committees;
  }

    /*-----------------------------------------------------------------------
    --  setLegilators
    -----------------------------------------------------------------------*/
    public setLegislators(legislators : ILegislatorSummaryDto[]): void {
        this._legislators = legislators;
    }

     /*-----------------------------------------------------------------------
    --  setLegilator
    -----------------------------------------------------------------------*/
    public setLegislator(legislator : ILegislatorDetailDto): void {
          this._legislator = legislator;
    }


  /*-----------------------------------------------------------------------
    --   getLegilators calls backend web service returns observable legislatorResponse
    -----------------------------------------------------------------------*/

    getLegislatorsFromWebApi(searchValue: string)   {
       if ( searchValue) {
        return    this._http.get<ILegislatorSummaryDto[]>(this._govLookuplegislatorUrl + '?searchValue=' + searchValue);

      } else {
        return    this._http.get<ILegislatorSummaryDto[]>(this._govLookuplegislatorUrl );
      }


  }

  /*-----------------------------------------------------------------------
  --  getLegilator calls backend web service returns observable of legislator
  -----------------------------------------------------------------------*/
  getLegislatorFromWebApi(id: string) {
      return     this._http.get<ILegislatorDetailDto>( this._govLookuplegislatorUrl + '/' + id);
  }
}



