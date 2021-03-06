import { Injectable } from '@angular/core';
import { ICurrentBillsyDto } from './bills';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class BillsService {



  _bills: ICurrentBillsyDto[];

  private _govLookupBillsUrl = environment.baseUrl +  '/api/bills';

  constructor(private _http: HttpClient) { }

  /*-----------------------------------------------------------------------
  --  getBillsFromService
  -----------------------------------------------------------------------*/
  public getBillsFromService(): ICurrentBillsyDto[] {
    return this._bills;
  }

  /*-----------------------------------------------------------------------
  --  get Bills calls backend web service returns observable ICurrentBillsyDto
  -----------------------------------------------------------------------*/

  getBillsFromWebApi() {
    return this._http.get<ICurrentBillsyDto[]>(this._govLookupBillsUrl);
  }

  /*-----------------------------------------------------------------------
--  setBills - store in service
-----------------------------------------------------------------------*/
  public setBills(bills: ICurrentBillsyDto[]): void {
    this._bills = bills;
  }

}



