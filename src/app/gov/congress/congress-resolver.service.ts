import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable} from 'rxjs';
import { ILegislatorDetailDto } from './legislator';
import { CongressService } from './congress.service';

@Injectable({providedIn: 'root'})
export class CongressResolver implements Resolve<ILegislatorDetailDto> {

  constructor( private congressService: CongressService) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILegislatorDetailDto>{
    const id = route.paramMap.get('id');
    return this.congressService.getLegislatorFromWebApi(id);
    }
}
