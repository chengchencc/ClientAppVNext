import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager.routing';
import { ManagerComponent } from './manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxEchartsDirective } from './dashboard/echarts/echarts.directive';
import { PageManagerComponent } from './page-manager/page-manager.component';
import { SharedModule } from '../../shared/shared.module';

import{ DragulaModule} from 'ng2-dragula';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DragulaModule,
    ManagerRoutingModule
  ],
  declarations: [
    ManagerComponent,
    DashboardComponent,
    NgxEchartsDirective,
    PageManagerComponent
]
})
export class ManagerModule { }
