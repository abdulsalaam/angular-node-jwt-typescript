import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

@Injectable()
export class CommonHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // If we need to add custom headers etc. do it here. For now it is just pass through interceptor.
        // The security token is sent as cookie, and not as separate header.
        // Perhaps change to add it as Authorization header ??
        return next.handle(req);
    }
}
