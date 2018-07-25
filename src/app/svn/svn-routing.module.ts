import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from '../svn/add/add.component';
import { ListComponent } from '../svn/list/list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'create',
                component: AddComponent
            },
            {
                path: 'list',
                component: ListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SvnRoutingModule {

}