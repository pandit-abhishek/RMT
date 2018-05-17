import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app.routing';

import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';

import { 
    StorageService,
    UserServices

} from './_services';

import { AuthGuard } from './_guards'


import { MenuItem } from './config/menu.item';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule
    ],
    providers: [
        StorageService,
        AuthGuard,
        MenuItem,
        UserServices
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
