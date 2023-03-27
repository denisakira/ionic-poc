import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable, switchMap, of, from, mergeMap, catchError } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loadingCtrl: LoadingController) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const createLoader$ = from(this.loadingCtrl.create());
    const presentLoader$ = (loader: HTMLIonLoadingElement) => from(loader.present());
    const dismissLoader$ = () => from(this.loadingCtrl.dismiss());
    
    return createLoader$.pipe(
      switchMap(presentLoader$),
      mergeMap(dismissLoader$),
      switchMap(() => next.handle(request)),
    )
  }
}
