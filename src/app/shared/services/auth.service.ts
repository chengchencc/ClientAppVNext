import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { UserManager, User, UserManagerSettings } from 'oidc-client/';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfig } from '../app-config';

const settings: UserManagerSettings = {
  authority: AppConfig.authServer,
  client_id: 'js',
  redirect_uri: 'http://localhost:4200/account/loginCallback',
  post_logout_redirect_uri: 'http://localhost:4200/index.html',
  response_type: 'id_token token',
  scope: 'openid profile api1 email phone',

  silent_redirect_uri: 'http://localhost:4200/silent-renew.html',
  automaticSilentRenew: true,
  accessTokenExpiringNotificationTime: 4,
  // silentRequestTimeout:10000,

  filterProtocolClaims: true,
  loadUserInfo: true
};


@Injectable()
export class AuthService {
  mgr: UserManager = new UserManager(settings);
  userLoadededEvent: EventEmitter<User> = new EventEmitter<User>();
  currentUser: User;
  loggedIn = false;

  authHeaders: Headers;

  authHeaders2: HttpHeaders;

  constructor(private http: Http) {

    this.mgr.getUser()
      .then((user) => {
        if (user) {
          this.loggedIn = true;
          this.currentUser = user;
          this.userLoadededEvent.emit(user);
        }
        else {
          this.loggedIn = false;
        }
      })
      .catch((err) => {
        this.loggedIn = false;
      });

    this.mgr.events.addUserLoaded((user) => {
      this.currentUser = user;
	  this.loggedIn = !(user === undefined);
      if (!environment.production) {
        console.log('authService addUserLoaded', user);
      }

    });

    this.mgr.events.addUserUnloaded((e) => {
      if (!environment.production) {
        console.log('user unloaded');
      }
      this.loggedIn = false;
    });

  }

  isLoggedInObs(): Observable<boolean> {
    return Observable.fromPromise(this.mgr.getUser()).map<User, boolean>((user) => {
      if (user) {
        return true;
      } else {
        return false;
      }
    });
  }

  clearState() {
    this.mgr.clearStaleState().then(function () {
      console.log('clearStateState success');
    }).catch(function (e) {
      console.log('clearStateState error', e.message);
    });
  }

  getUser() {
    return this.mgr.getUser().then((user) => {
      this.currentUser = user;
      console.log('got user', user);
      this.userLoadededEvent.emit(user);
    }).catch(function (err) {
      console.log(err);
    });
  }

  removeUser() {
    this.mgr.removeUser().then(() => {
      this.userLoadededEvent.emit(null);
      console.log('user removed');
    }).catch(function (err) {
      console.log(err);
    });
  }

  startSigninMainWindow() {
    this.mgr.signinRedirect({ data: 'some data' }).then(function () {
      console.log('signinRedirect done');
    }).catch(function (err) {
      console.log(err);
    });
  }
  endSigninMainWindow() {
        //https://github.com/IdentityModel/oidc-client-js/issues/523
        window.location.hash = decodeURIComponent(window.location.hash);
   return  this.mgr.signinRedirectCallback().then(function (user) {
      console.log('signed in', user);
    }).catch(function (err) {
      console.log(err);
    });
  }

  reLogin(){
    this.mgr.signinSilent()
  }


  startSignoutMainWindow() {
    this.mgr.getUser().then(user => {
      return this.mgr.signoutRedirect({ id_token_hint: user.id_token }).then(resp => {
        console.log('signed out', resp);
		setTimeout(5000, () => {
          console.log('testing to see if fired...');
        });
      }).catch(function (err) {
        console.log(err);
      });
    });   
  };

  endSignoutMainWindow() {
    this.mgr.signoutRedirectCallback().then(function (resp) {
      console.log('signed out', resp);
    }).catch(function (err) {
      console.log(err);
    });
  };
  /**
   * Example of how you can make auth request using angulars http methods.
   * @param options if options are not supplied the default content type is application/json
   */
  AuthGet(url: string, options?: RequestOptions): Observable<Response> {

    if (options) {
      options = this._setRequestOptions(options);
    }
    else {
      options = this._setRequestOptions();
    }
    return this.http.get(url, options);
  }
  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthPut(url: string, data: any, options?: RequestOptions): Observable<Response> {

    let body = JSON.stringify(data);

    if (options) {
      options = this._setRequestOptions(options);
    }
    else {
      options = this._setRequestOptions();
    }
    return this.http.put(url, body, options);
  }
  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthDelete(url: string, options?: RequestOptions): Observable<Response> {

    if (options) {
      options = this._setRequestOptions(options);
    }
    else {
      options = this._setRequestOptions();
    }
    return this.http.delete(url, options);
  }
  /**
   * @param options if options are not supplied the default content type is application/json
   */
  AuthPost(url: string, data: any, options?: RequestOptions): Observable<Response> {

    let body = JSON.stringify(data);

    if (options) {
      options = this._setRequestOptions(options);
    } else {
      options = this._setRequestOptions();
    }
    return this.http.post(url, body, options);
  }


  public _setAuthHeaders(user: any): void {
    this.authHeaders = new Headers();
    this.authHeaders.append('Authorization', user.token_type + ' ' + user.access_token);
    if (this.authHeaders.get('Content-Type')) {

    } else {
      this.authHeaders.append('Content-Type', 'application/json');
    }
  }
  public _setRequestOptions(options?: RequestOptions) {
    if (this.loggedIn) {
      this._setAuthHeaders(this.currentUser);
    }
    if (options) {
      options.headers.append(this.authHeaders.keys[0], this.authHeaders.values[0]);
    } else {
      options = new RequestOptions({ headers: this.authHeaders });
    }

    return options;
  }


  public setAuthHeaders(user: any): void {
    this.authHeaders2 = new HttpHeaders();
    this.authHeaders2 = this.authHeaders2.append('Authorization', user.token_type + ' ' + user.access_token);
    if (this.authHeaders2.get('Content-Type')) {

    } else {
      this.authHeaders2 = this.authHeaders2.append('Content-Type', 'application/json');
    }
  }
  public setRequestOptions(options?: {
    headers?: HttpHeaders ;
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}) {
    if (this.loggedIn) {
      this.setAuthHeaders(this.currentUser);
    }
    if (options) {
      options.headers.append(this.authHeaders2.keys[0], this.authHeaders2[0]);
    } else {
      options = { headers: this.authHeaders2 };
    }

    return options;
  }

public setAuthHeader(headers:HttpHeaders){

  if(!this.loggedIn || !this.currentUser) throw new Error("need to login!");
  
  if(!headers.has("Authorization")){
    headers = headers.append('Authorization', this.currentUser.token_type + ' ' + this.currentUser.access_token);
  }
  return  headers;
}



}


