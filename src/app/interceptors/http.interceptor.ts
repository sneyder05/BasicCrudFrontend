import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CharacterService } from '../services/http/character.service';
import { catchError, filter, map } from 'rxjs/operators';
import { Any, RequestErrorResponse } from '../types';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(public characterService: CharacterService) {}

    public intercept(req: HttpRequest<Any>, next: HttpHandler): Observable<HttpEvent<Any>> {
        return next.handle(req).pipe(
            catchError(err => {
                const requestError: RequestErrorResponse = {
                    success: false,
                    message: err.error.message || err.statusText,
                    data: null
                }

                return throwError(requestError);
            }),
            filter(event => event instanceof HttpResponse),
            map((reqResponse: HttpResponse<Any>) => {
                return reqResponse.clone({
                    body: reqResponse.body.data
                });
            })
        );
    }
}