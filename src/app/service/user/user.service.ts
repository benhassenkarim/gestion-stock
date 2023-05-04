import { Injectable } from '@angular/core';
import {AuthenticationService} from "../../../gs-api/src/services/authentication.service";
import {Router} from "@angular/router";
import {AuthenticationResponse} from "../../../gs-api/src/models/authentication-response";
import {AuthenticationRequest} from "../../../gs-api/src/models/authentication-request";
import {error} from "ng-packagr/lib/utils/log";
import {Observable} from "rxjs";
import {UtilisateursService} from "../../../gs-api/src/services/utilisateurs.service";
import {UtilisateurDto} from "../../../gs-api/src/models/utilisateur-dto";
import {of} from "rxjs";
import {ChangerMotDePasseUtilisateurDto} from "../../../gs-api/src/models/changer-mot-de-passe-utilisateur-dto";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService:AuthenticationService,
    private utilisateurService:UtilisateursService,
    private router:Router
  ) { }

  login(authenticationRequest:AuthenticationRequest):Observable<AuthenticationResponse>{
return this.authenticationService.authenticate(authenticationRequest);
  }
  getUserByEmail(email?:string):Observable<UtilisateurDto>{
    if(email !== undefined){
      return this.utilisateurService.findByEmail(email);
    }
    return of();

  }
  getConnectedUser(): UtilisateurDto {
    if (localStorage.getItem('connectedUser')) {
      return JSON.parse(localStorage.getItem('connectedUser') as string);
    }
    return {};
  }
  // @ts-ignore
  setAccessToken(authenticationResponse:AuthenticationResponse):Observable<AuthenticationResponse>{
    localStorage.setItem('accessToken',JSON.stringify(authenticationResponse));
  }
  setUtilisateur(utilisateur: UtilisateurDto): void {
    localStorage.setItem('connectedUser', JSON.stringify(utilisateur));
  }
  isAccesTockenValid():boolean{
if(localStorage.getItem('connectedUser')){
  return true;
}
this.router.navigate(['login']);
return false;
  }
  changerMotDePasse(changerMotDePasseDto: ChangerMotDePasseUtilisateurDto): Observable<ChangerMotDePasseUtilisateurDto> {
    return this.utilisateurService.changerMotDePasse(changerMotDePasseDto);
  }
}
