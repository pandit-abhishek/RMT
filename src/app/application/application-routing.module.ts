import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from '../application/application.component';
import { AddComponent } from '../application/add/add.component';
import { ListComponent } from '../application/list/list.component';

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
export class ApplicationRoutingModule {

}