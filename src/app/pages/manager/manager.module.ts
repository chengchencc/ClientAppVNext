import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager.routing';
import { ManagerComponent } from './manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxEchartsDirective } from './dashboard/echarts/echarts.directive';
import { PageManagerComponent } from './page-manager/page-manager.component';
import { SharedModule } from '../../shared/shared.module';

import{ DragulaModule} from 'ng2-dragula';
import { ManagerService } from './manager.service';
import { TaskListComponent } from './page-manager/task-list/task-list.component';
import { NgxBootstrapModule } from '../../shared/ngxBootstrap.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragulaModule,
    ManagerRoutingModule,
    NgxBootstrapModule
  ],
  declarations: [
    ManagerComponent,
    DashboardComponent,
    NgxEchartsDirective,
    PageManagerComponent,
    TaskListComponent
],
providers:[
  ManagerService
]
})
export class ManagerModule { }
