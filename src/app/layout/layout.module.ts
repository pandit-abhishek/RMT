import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent, FooterComponent, SidebarComponent} from './../_partials';
import { MaterialModule } from '../material/material.module';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterialModule
    ],
    declarations: [HeaderComponent, LayoutComponent, FooterComponent, SidebarComponent]
})
export class LayoutModule { }
