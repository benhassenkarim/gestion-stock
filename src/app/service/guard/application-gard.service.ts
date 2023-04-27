import {Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";

// @ts-ignore
import {Observable} from 'rxjs/dist/types';
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class ApplicationGardService implements CanActivate{

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> |Promise<boolean |UrlTree> |boolean|UrlTree{
    return this.userService.isAccesTockenValid();

  }
}
