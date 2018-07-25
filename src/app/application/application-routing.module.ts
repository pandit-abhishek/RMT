import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from '../application/application.component';
import { AddComponent } from '../application/add/add.component';
import { ListComponent } from '../application/list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './logentry/create/create.component';

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
            },
            {
                path: 'details/:app',
                component: DetailsComponent
            },
            {
                path: 'logentry/:app/create',
                component: CreateComponent
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