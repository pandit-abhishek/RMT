import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

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
                path: 'application',
                loadChildren : '../application/application.module#ApplicationModule'
            },
            {
                path: 'dashboard',
                loadChildren: '../dashboard/dashboard.module#DashboardModule'
            },
            {
                path : 'user',
                loadChildren : '../user/user.module#UserModule'
            },
            {
                path : 'instance',
                loadChildren : '../instance/instance.module#InstanceModule'
            },
            {
                path : 'svn',
                loadChildren : '../svn/svn.module#SvnModule'
            },
            {
                path : 'release',
                loadChildren : '../release/release.module#ReleaseModule'
            }
        ]
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }