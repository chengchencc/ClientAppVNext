import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileExplorerComponent } from './file-explorer.component';
import { AuthGuardService } from '../../shared/services/auth-guard.service';



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
        component:FileExplorerComponent,
        canActivate:[AuthGuardService]
    }
];

@NgModule({
    declarations:[
    ],
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class FileExplorerRoutingModule {
}