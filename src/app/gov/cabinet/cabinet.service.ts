


import { Injectable, OnDestroy } from '@angular/core';
import { ICabinetSummaryDto, ICabinetDetailDto } from './cabinet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CabinetService {


  _cabinetMember: ICabinetDetailDto;
  _cabinetMembers: ICabinetSummaryDto[];

  private _govLookupcabinetUrl = environment.baseUrl + '/api/cabinet';

  constructor(private _http: HttpClient) { }

  /*-----------------------------------------------------------------------
  --  getCabinetMembersFromService
  -----------------------------------------------------------------------*/
  public getCabinetMembersFromService() {
    return this._cabinetMembers;
  }

  /*-----------------------------------------------------------------------
  --  getCabinetMemberFromService
  -----------------------------------------------------------------------*/
  public getCabinetMemberFromService() {
    return this._cabinetMember;
  }

  /*-----------------------------------------------------------------------
   --  getJobHistotyFromService
   -----------------------------------------------------------------------*/
  public getJobHistoryFromService() {
    return this._cabinetMember.jobHistory;
  }


  /*-----------------------------------------------------------------------
  --  setCabinetMembers - store in service
  -----------------------------------------------------------------------*/
  public setCabinetMembers(cabinetMembers: ICabinetSummaryDto[]): void {
    this._cabinetMembers = cabinetMembers;
  }

  /*-----------------------------------------------------------------------
  --  setCabinetMember - store in service
  -----------------------------------------------------------------------*/
  public setCabinetMember(cabinetMember: ICabinetDetailDto): void {
    this._cabinetMember = cabinetMember;
  }

  /*-----------------------------------------------------------------------
  --  getCabinetMembers calls backend web service returns observable CabinetResponse
  -----------------------------------------------------------------------*/

  getCabinetMembersFromWebApi() {
    return this._http.get<ICabinetSummaryDto[]>(this._govLookupcabinetUrl);
  }

  /*-----------------------------------------------------------------------
  --  getLCabinetMembercalls backend web service returns observable of Cabinet
  -----------------------------------------------------------------------*/
  getCabinetMemberFromWebApi(id: string) {
    return this._http.get<ICabinetDetailDto>(this._govLookupcabinetUrl + '/' + id);
  }









}



