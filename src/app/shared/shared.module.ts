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
// import { EndpointFactory } from "./services/endpoint-factory.service";


@NgModule({
    imports: [ 
        CommonModule,
        HttpClientModule,
        HttpModule
     ],
    declarations: [ 
        IconComponent
     ],
     exports:[
         IconComponent
     ],
     providers:[
        AlertService,
        AuthService,
        AuthGuardService,
        ConfigurationService,
        LocalStoreManager,
        // EndpointFactory

     ]
})
export class SharedModule { }