import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEventType, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from './app-config';
import { AuthService } from './services/auth.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Injectable()
export class MyCommonHttpClient {
    host = AppConfig.File_Server_Host;
    _self = this;
    constructor(private http: HttpClient, private authService: AuthService, private router: Router) { 


    }


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
    }): Observable<T> {
        return this.http.get<T>(this.host + url, options);
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
    }): Observable<T> {
        return this.http.post<T>(this.host + url, body, options);
    }


    //common get
    public authGet<T>(url: string, options?: {
        headers?: HttpHeaders;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {

        if (options) {
            options = this.authService.setRequestOptions(options);
        }
        else {
            options = this.authService.setRequestOptions();
        }

        return this.http.get<T>(this.host + url, options).pipe(catchError(error=>this.handleError(error,this.router)));
    }

    public authPost<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {

        if (options) {
            options = this.authService.setRequestOptions(options);
        }
        else {
            options = this.authService.setRequestOptions();
        }

        return this.http.post<T>(this.host + url, body, options).pipe(catchError(error=>this.handleError(error,this.router)));
    }


    public upload(url: string, file: FormData) {
        let headers = new HttpHeaders();
        
        // headers = headers.append('Content-Type', 'multipart/form-data');
        // headers =  headers.append('Accept', 'application/json');
        headers = this.authService.setAuthHeader(headers);

        let req = new HttpRequest('POST', this.host + url, file, {
            headers: headers,
            reportProgress: true,
        });




        return this.http.request(req).pipe(catchError(error=>this.handleError(error,this.router)));

    }


    public handleError(error: HttpErrorResponse,router:Router) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
            if(error.status == 401){
                router.navigate(['/account/login']);
            }
            
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(
          'Something bad happened; please try again later.');
      };



}

