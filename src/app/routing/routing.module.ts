import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorLayoutComponent } from '../layouts/error';
import { ViewportLayoutComponent } from '../layouts/viewport';
import { CharacterListComponent } from '../pages/character/list/character-list.component';
import { DummyHelloComponent } from '../pages/dummy/hello';
import { Page404Component } from '../pages/error/error-404';

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