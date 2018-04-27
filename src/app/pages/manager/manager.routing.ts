import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageManagerComponent } from './page-manager/page-manager.component';



const routes: Routes = [
    // { 
    //     path:'demo',
    //     component: AppDemoComponent ,
    //     children:[
    //         { path: 'upload', component: UploadDemoComponent }
    //     ]
    // }
    {
        path:'',
        component:ManagerComponent,
        children:[
            {path:'',redirectTo:'dashboard'},
            {path:"dashboard",component:DashboardComponent},
            {path:"file",loadChildren:'app/pages/file-explorer/file-explorer.module#FileExplorerModule'},
            {path:"page", component:PageManagerComponent }
        ]
    }
];

@NgModule({
    declarations:[
    ],
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ManagerRoutingModule {
}