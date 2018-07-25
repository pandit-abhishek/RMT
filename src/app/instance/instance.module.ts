import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstanceComponent } from './instance.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { InstanceRoutingModule } from './instance-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        InstanceRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [InstanceComponent, AddComponent, ListComponent]
})
export class InstanceModule { }
