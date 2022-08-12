import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // This will run for every request made, unless an url is specified

    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz'),
    });
    if (req.url === 'something') {
      console.log('Requested made from ', req.url);
    }

    return next.handle(modifiedRequest);
  }
}
