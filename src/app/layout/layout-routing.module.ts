import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../_guards'

const routes: Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path : '',
                loadChildren:'../dashboard/dashboard.module#DashboardModule',
                canActivate:[AuthGuard]
            },
            {
                path : 'dashboard',
                loadChildren : '../dashboard/dashboard.module#DashboardModule'
            },
            {
                path : 'login',
                loadChildren : '../login/login.module#LoginModule'
            }
        ]
        
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}