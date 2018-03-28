import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { FileExplorerRoutingModule } from "./file-explorer.routing";

import { FileExplorerComponent } from './file-explorer.component';
import { SharedModule } from '../../shared/shared.module';
import { FileService } from './file.service';


@NgModule({
  imports: [
    CommonModule,
    FileExplorerRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    FileExplorerComponent
],
providers:[
  FileService
]
})
export class FileExplorerModule { }
