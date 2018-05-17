import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app.routing';

import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
// import { SidebarComponent } from './component/sidebar/sidebar.component';
//import { DashboardComponent } from './dashboard/dashboard.component';

import { StorageService } from './shared/services/storage.service';
import { AuthGuard } from './_guards'
// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // SidebarComponent,
    // LoginComponent,
    //DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [
    StorageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
