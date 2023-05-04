import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../../gs-api/src/models/authentication-response";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
   // private loaderService: LoaderService
  ) { }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //this.loaderService.show();
    let authenticationResponse: AuthenticationResponse = {};
    if (localStorage.getItem('connectedUser')) {
      authenticationResponse = JSON.parse(
        localStorage.getItem('connectedUser') as string
      );
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + authenticationResponse.accessToken
        })
      });
      //return this.handleRequest(authReq, next);
      return next.handle(authReq);
    }
    //return this.handleRequest(req, next);
  }

  /*handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
         // this.loaderService.hide();
        }
      }, (err: any) => {
       // this.loaderService.hide();
      }));
  }*/
}
