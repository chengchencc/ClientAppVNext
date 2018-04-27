import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDemoRoutingModule } from "./app-demo.routing";
import { UploadDemoComponent } from './upload-demo/upload-demo.component';
import { GridsterDemoComponent } from './gridster-demo/gridster-demo.component';

import { NzMessageModule } from "ng-zorro-antd";
import { NzMessageService } from "ng-zorro-antd";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NzMessageModule,
    SharedModule,
    AppDemoRoutingModule
  ],
  declarations: [
  UploadDemoComponent,
  GridsterDemoComponent
],
providers:[
  NzMessageService
]
})
export class AppDemoModule { }
