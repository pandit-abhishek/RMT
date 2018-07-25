import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from '../instance/add/add.component';
import { ListComponent } from '../instance/list/list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'add',
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
export class InstanceRoutingModule {

}