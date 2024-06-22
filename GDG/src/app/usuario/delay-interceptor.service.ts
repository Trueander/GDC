import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {finalize, Observable, switchMap, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DelayInterceptorService {

}
