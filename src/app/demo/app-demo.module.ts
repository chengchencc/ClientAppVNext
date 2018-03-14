import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDemoRoutingModule } from "./app-demo.routing";
import { UploadDemoComponent } from './upload-demo/upload-demo.component';


@NgModule({
  imports: [
    CommonModule,
    AppDemoRoutingModule
  ],
  declarations: [
  UploadDemoComponent
]
})
export class AppDemoModule { }
