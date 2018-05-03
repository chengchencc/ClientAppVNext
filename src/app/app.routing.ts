import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manager',
    pathMatch: 'full'
  },
  {
      path:'home',
      loadChildren:'app/pages/home/home.module#HomeModule'
  },
  {
    path:'account',
    loadChildren:'app/pages/account/account.module#AccountModule'
  },
  { 
    path: 'demo', // home
    loadChildren: 'app/demo/app-demo.module#AppDemoModule'
  },
  {
    path:'file',
    loadChildren:'app/pages/file-explorer/file-explorer.module#FileExplorerModule'
  },
  {
    path:'manager',
    loadChildren:'app/pages/manager/manager.module#ManagerModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
    //{ enableTracing: true } // <-- debugging purposes only)
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
