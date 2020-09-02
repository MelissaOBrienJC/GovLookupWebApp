import { Injectable } from '@angular/core';
import { IJudiciaryDetailDto, IJudiciarySummaryDto, IKeyDecisionsDto, IKeyDecisionsOpinionsDto } from './judiciary';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class JudiciaryService {


  _judge: IJudiciaryDetailDto;
  _judges: IJudiciarySummaryDto[];

  private _govLookupjudiciaryUrl = environment.baseUrl + '/api/judiciary';

  constructor(private _http: HttpClient) { }

  /*-----------------------------------------------------------------------
  --  getJudgesFromService
  -----------------------------------------------------------------------*/
  public getJudgesFromService(): IJudiciarySummaryDto[] {
    return this._judges;
  }

  /*-----------------------------------------------------------------------
  --  getJudgeFromService
  -----------------------------------------------------------------------*/
  public getJudgeFromService(): IJudiciaryDetailDto {
    return this._judge;
  }

  /*-----------------------------------------------------------------------
  --  getKeyDecisionsFromService
  -----------------------------------------------------------------------*/
  public getKeyDecisionsFromService(): IKeyDecisionsDto[] {
    return this._judge.keyDecisions;
  }

  /*-----------------------------------------------------------------------
   --  getKeyDecisionsOpinionsFromService
   -----------------------------------------------------------------------*/
  public getKeyDecisionsOpinionsFromService(): IKeyDecisionsOpinionsDto[] {
    return this._judge.keyDecisionsOpinions;
  }

  /*-----------------------------------------------------------------------
   --  getJudgeLastNameFromService
   -----------------------------------------------------------------------*/
  public getJudgeLastNameFromService(): string {
    return this._judge.lastName;
  }

  /*-----------------------------------------------------------------------
  --  setJudges - store in service
  -----------------------------------------------------------------------*/
  public setJudges(judges: IJudiciarySummaryDto[]): void {
    this._judges = judges;
  }

  /*-----------------------------------------------------------------------
  --  setJudge - store in service
  -----------------------------------------------------------------------*/
  public setJudge(judge: IJudiciaryDetailDto): void {
    this._judge = judge;
  }

  /*-----------------------------------------------------------------------
  --  getJudges calls backend web service returns observable JudiciaryResponse
  -----------------------------------------------------------------------*/

  getJudgesFromWebApi() {
    return this._http.get<IJudiciarySummaryDto[]>(this._govLookupjudiciaryUrl);
  }

  /*-----------------------------------------------------------------------
  --  getLJudgecalls backend web service returns observable of JudiciaryResponse
  -----------------------------------------------------------------------*/
  getJudgeFromWebApi(id: string) {
    return this._http.get<IJudiciaryDetailDto>(this._govLookupjudiciaryUrl + '/' + id);
  }









}



