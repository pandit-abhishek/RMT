import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [UserComponent, AddComponent, ListComponent]
})
export class UserModule { }
