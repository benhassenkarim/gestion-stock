import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../../gs-api/src/models/authentication-response";
import {ServiceService} from "../../composants/loader/service/service.service";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
    private loaderService: ServiceService
  ) { }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    let authenticationResponse: AuthenticationResponse = {};
    if (localStorage.getItem('accessToken')) {
      authenticationResponse = JSON.parse(
        localStorage.getItem('accessToken') as string
      );
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + authenticationResponse.accessToken
        })
      });
      return this.handleRequest(authReq, next);
      return next.handle(authReq);
    }
    return next.handle(req);
    return this.handleRequest(req, next);
  }

  handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        this.loaderService.hide();
        }
      }, (err: any) => {
       this.loaderService.hide();
      }));
  }
}
