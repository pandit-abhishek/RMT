import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseComponent } from './release.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ReleaseRoutingModule } from './release-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReleaseRoutingModule
    ],
    declarations: [ReleaseComponent, ListComponent, AddComponent]
})
export class ReleaseModule { }
