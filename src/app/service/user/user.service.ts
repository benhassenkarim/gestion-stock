import { Injectable } from '@angular/core';
import {AuthenticationService} from "../../../gs-api/src/services/authentication.service";
import {Router} from "@angular/router";
import {AuthenticationResponse} from "../../../gs-api/src/models/authentication-response";
import {AuthenticationRequest} from "../../../gs-api/src/models/authentication-request";
import {error} from "ng-packagr/lib/utils/log";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService:AuthenticationService,

  ) { }

  login(authenticationRequest:AuthenticationRequest):Observable<AuthenticationResponse>{
return this.authenticationService.authenticate(authenticationRequest);
  }
  // @ts-ignore
  setConnectedUser(authenticationResponse:AuthenticationResponse):Observable<AuthenticationResponse>{
    localStorage.setItem('connectedUser',JSON.stringify(authenticationResponse));
  }
}
