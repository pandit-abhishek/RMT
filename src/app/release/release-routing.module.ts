import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from '../release/add/add.component';
import { ListComponent } from '../release/list/list.component';

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
export class ReleaseRoutingModule {

}