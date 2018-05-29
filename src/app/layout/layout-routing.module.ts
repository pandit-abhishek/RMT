import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../_guards'

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: '../dashboard/dashboard.module#DashboardModule'
            },
        ]
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }