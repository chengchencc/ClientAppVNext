import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginCallbackComponent } from './login/login-callback/login-callback.component';




const routes: Routes = [
    // { 
    //     path:'demo',
    //     component: AppDemoComponent ,
    //     children:[
    //         { path: 'upload', component: UploadDemoComponent }
    //     ]
    // }
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'loginCallback',
        component:LoginCallbackComponent
    }
];

@NgModule({
    declarations:[
    ],
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AccountRoutingModule {
}