import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSoapModule } from 'ngx-soap';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app.routing';

import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { 
    StorageService,
    UserServices,
    ApplicationService

} from './_services';

import { AuthGuard } from './_guards'


import { MenuItem } from './config/menu.item';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule,
        NgxSoapModule,
        BrowserAnimationsModule,
    ],
    providers: [
        StorageService,
        AuthGuard,
        MenuItem,
        UserServices,
        ApplicationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
