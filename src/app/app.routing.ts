import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  },
  {
      path:'home',
      loadChildren:'app/pages/home/home.module#HomeModule'
  },
  { 
    path: 'demo', // home
    loadChildren: 'app/demo/app-demo.module#AppDemoModule'
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
    { enableTracing: true } // <-- debugging purposes only)
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
