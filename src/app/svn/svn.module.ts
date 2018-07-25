import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvnComponent } from './svn.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SvnRoutingModule  } from './svn-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SvnRoutingModule
    ],
    declarations: [SvnComponent, AddComponent, ListComponent]
})
export class SvnModule { }
