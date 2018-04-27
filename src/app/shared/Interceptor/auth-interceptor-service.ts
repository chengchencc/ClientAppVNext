import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor  {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if(!this.auth.loggedIn || !this.auth.currentUser) throw new Error("need to login!");

    if(!req.headers.has("Authorization")){

        // Get the auth token from the service.
        let authToken = this.auth.currentUser.access_token;
        let authType = this.auth.currentUser.token_type;

        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
          headers: req.headers.set('Authorization', authType+ " " + authToken)
        });

        // send cloned request with header to the next handler.
        return next.handle(authReq);
      }else
        return next.handle(req);
  }

}

