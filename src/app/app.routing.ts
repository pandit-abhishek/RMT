import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';



export const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}