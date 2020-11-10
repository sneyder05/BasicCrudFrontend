import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ErrorLayoutComponent } from '../layouts/error';
import { CharacterListComponent } from '../layouts/pages/character/list';
import { Page404Component } from '../layouts/pages/error/error-404';
import { ViewportLayoutComponent } from '../layouts/viewport';

const ErrorRoutes: Routes = [
    { path: '404', component: Page404Component }
];

const ViewportRoutes: Routes = [
    { path: 'dash', component: CharacterListComponent }
];

const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app/dash' },
    { path: 'error', component: ErrorLayoutComponent, children: ErrorRoutes },
    { path: 'app', component: ViewportLayoutComponent, children: ViewportRoutes },
    { path: '**', pathMatch: 'full', redirectTo: 'error/404' }
];

@NgModule({
    imports: [ RouterModule.forRoot(AppRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }