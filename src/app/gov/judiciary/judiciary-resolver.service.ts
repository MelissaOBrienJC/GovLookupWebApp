import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable} from 'rxjs';
import { IJudiciaryDetailDto } from './judiciary';
import { JudiciaryService } from './judiciary.service';

@Injectable({providedIn: 'root'})
export class JudiciaryResolver implements Resolve< IJudiciaryDetailDto > {

  constructor( private judiciaryService: JudiciaryService) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IJudiciaryDetailDto>{
    const id = route.paramMap.get('id');
    return this.judiciaryService.getJudgeFromWebApi(id);
    }
}
