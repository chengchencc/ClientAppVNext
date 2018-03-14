import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppDemoComponent } from './app-demo.component';
import { UploadDemoComponent } from './upload-demo/upload-demo.component';

const routes: Routes = [
    { 
        path:'',
        component: AppDemoComponent ,
        children:[
            {path:'',redirectTo:'upload'},
            { path: 'upload', component: UploadDemoComponent }
        ]
    }
];

@NgModule({
    declarations:[
        AppDemoComponent
    ],
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule,AppDemoComponent ]
})
export class AppDemoRoutingModule {
}