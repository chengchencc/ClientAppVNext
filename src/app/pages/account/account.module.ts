import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';

import { AccountRoutingModule } from './account.routing';
import { LoginComponent } from './login/login.component';
import { LoginCallbackComponent } from './login/login-callback/login-callback.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    LoginComponent,
    LoginCallbackComponent
],
providers:[
]
})
export class AccountModule { }
