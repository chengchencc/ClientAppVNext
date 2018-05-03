import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    ModalModule,
    BsDropdownModule
} from "ngx-bootstrap";

@NgModule({
    declarations: [],
    imports: [ 
        ModalModule.forRoot(),
        BsDropdownModule.forRoot()
     ],
    exports: [],
    providers: [],
})
export class NgxBootstrapModule {}