import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { IconComponent } from './components/icon/icon.component';

import { AlertService } from './services/alert.service'
import { AuthService } from "./services/auth.service";
import { ConfigurationService } from "./services/configuration.service";
import { LocalStoreManager } from "./services/local-store-manager.service";
import { AuthGuardService } from './services/auth-guard.service';
import { FileSizePipe } from './pipes/file-size-pipe';
// import { EndpointFactory } from "./services/endpoint-factory.service";
import { httpInterceptorProviders } from './Interceptor/http-interceptor-providers';
import { AppConfig } from './app-config';
import { ServiceProxiesModule } from './service-proxies/service-proxies-module';
import { BodyDirective } from './directives/body.directive';


@NgModule({
    imports: [ 
        CommonModule,
        HttpClientModule,
        ServiceProxiesModule,
        HttpModule
     ],
    declarations: [ 
        IconComponent,
        FileSizePipe,
        BodyDirective
     ],
     exports:[
         IconComponent,
         FileSizePipe
        ],
     providers:[
        AlertService,
        AuthService,
        AuthGuardService,
        ConfigurationService,
        LocalStoreManager

        // EndpointFactory

     ]
})
export class SharedModule { }