import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';



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
        component:HomeComponent
    }
];

@NgModule({
    declarations:[
    ],
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {
}