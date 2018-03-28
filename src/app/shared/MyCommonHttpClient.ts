import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { File_Server_Host } from './config';
import { AuthService } from './services/auth.service';


@Injectable()
export class MyCommonHttpClient {
  host = File_Server_Host;
  constructor(private http: HttpClient,private authService:AuthService) { }


   //common get
   public get<T>(url: string, options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}): Observable<T>{
  return this.http.get<T>(this.host+url,options);
}

public post<T>(url: string, body: any | null, options?: {
      headers?: HttpHeaders | {
          [header: string]: string | string[];
      };
      observe?: 'body';
      params?: HttpParams | {
          [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
}): Observable<T>{
  return  this.http.post<T>(this.host+url,body,options);
}


   //common get
   public authGet<T>(url: string, options?: {
    headers?: HttpHeaders ;
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}): Observable<T>{

    if (options) {
        options = this.authService.setRequestOptions(options);
      }
      else {
        options = this.authService.setRequestOptions();
      }

  return this.http.get<T>(this.host+url,options);
}

public authPost<T>(url: string, body: any | null, options?: {
    headers?: HttpHeaders ;
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}): Observable<T>{

  if (options) {
      options = this.authService.setRequestOptions(options);
    }
    else {
      options = this.authService.setRequestOptions();
    }

return  this.http.post<T>(this.host+url,body,options);
}


}
