import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorPrintInterceptor implements HttpInterceptor {
  constructor(private readonly notificationService: NotificationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        // eslint-disable-next-line rxjs/no-implicit-any-catch
        error: (err: any) => {
          const url = new URL(request.url);

          if (err.status === 401 || err.status === 403) {
            alert(err.message);
          }

          this.notificationService.showError(
            `Request to "${url.pathname}" failed. Check the console for the details`,
            0
          );
        },
      })
    );
  }
}
