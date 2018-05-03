import { NgModule } from '@angular/core';

import * as ApiSP from './service-proxies';
import { httpInterceptorProviders } from '../Interceptor/http-interceptor-providers';
import { AppConfig } from '../app-config';
import { API_BASE_URL } from './service-proxies';

@NgModule({
    imports: [ 

    ],
    declarations: [  ],
    providers:[
        // ApiSP.AppCrudServiceProxy,
        ApiSP.AuthServiceProxy,
        ApiSP.DemoServiceProxy,
        ApiSP.TasksServiceProxy,
        httpInterceptorProviders,
        {provide:API_BASE_URL,useValue:AppConfig.API_BASE_URL}    
    ]
})
export class ServiceProxiesModule { }