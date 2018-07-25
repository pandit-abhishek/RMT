import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSoapModule } from 'ngx-soap';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
    StorageService,
    UserServices,
    ApplicationService

} from './_services';

import { AuthGuard } from './_guards'


import { MenuItem } from './config/menu.item';

import { SidebarComponent } from './_partials/sidebar/sidebar.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

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
        BrowserAnimationsModule
        
    ],
    providers: [
        StorageService,
        AuthGuard,
        MenuItem,
        UserServices,
        ApplicationService,
        SidebarComponent,
        { 
            provide: LocationStrategy, 
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
