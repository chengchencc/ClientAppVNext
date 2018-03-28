import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
