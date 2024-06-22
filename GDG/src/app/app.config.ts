import {ApplicationConfig, inject} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  provideHttpClient,
  withFetch,
  withInterceptors
} from "@angular/common/http";
import {finalize, Observable, switchMap, timer} from "rxjs";
import {SpinnerService} from "./usuario/spinner.service";

export const interceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const spinner = inject(SpinnerService);
  spinner.show();
  return timer(1000).pipe(
    switchMap(() => {
      return next(req).pipe(finalize(() => spinner.hide()))
    })
  );
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptors([interceptorFn]))]
};
