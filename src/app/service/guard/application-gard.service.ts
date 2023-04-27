import {Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";

// @ts-ignore
import {Observable} from 'rxjs/dist/types';

@Injectable({
  providedIn: 'root'
})
export class ApplicationGardService implements CanActivate{

  constructor() { }

  ngOnInit(): void {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> |Promise<boolean |UrlTree> |boolean|UrlTree{
    return false;

  }
}
