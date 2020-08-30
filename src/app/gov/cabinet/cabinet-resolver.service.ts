import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable} from 'rxjs';
import { ICabinetDetailDto } from './cabinet';
import { CabinetService } from './cabinet.service';

@Injectable({providedIn: 'root'})
export class CabinetResolver implements Resolve<ICabinetDetailDto> {

  constructor( private cabinetService: CabinetService) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICabinetDetailDto>{
    const id = route.paramMap.get('id');
    return this.cabinetService.getCabinetMemberFromWebApi(id);
    }
}
