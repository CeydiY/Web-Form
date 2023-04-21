import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokeInterceptorService implements HttpInterceptor {
  private readonly token: string="2|JZFqeydS1kJw1fcyIHQYTa0lbKcL96eH512ksU0y";

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.token) {
      const modReq = req.clone({
        setHeaders: {
          'Content-Type' : 'application/json',
          'Accept'       : '*/*',
          'Authorization': 'Bearer 1|mMX3hXGX5CxonPekaiGkCNvhsrWmqHoL709noJBb'
        }
      });
      return next.handle(modReq);
    }
    return next.handle(req);
  }
}
localStorage.setItem('token', '1|mMX3hXGX5CxonPekaiGkCNvhsrWmqHoL709noJBb');
