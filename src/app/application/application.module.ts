import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './logentry/create/create.component';
import { MaterialComponent } from './../material/material.component';

@NgModule({
    imports: [
        CommonModule,
        ApplicationRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents:[
       
    ],
    declarations: [ ApplicationComponent, ListComponent, AddComponent, DetailsComponent, CreateComponent,MaterialComponent ]
})
export class ApplicationModule { }
