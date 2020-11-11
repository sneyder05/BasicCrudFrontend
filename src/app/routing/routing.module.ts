import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorLayoutComponent } from '../layouts/error';
import { ViewportLayoutComponent } from '../layouts/viewport';
import { CharacterDetailComponent } from '../pages/character/detail';
import { CharacterListComponent } from '../pages/character/list';
import { Page404Component } from '../pages/error/error-404';

const ErrorRoutes: Routes = [
    { path: '404', component: Page404Component }
];

const ViewportRoutes: Routes = [
    { path: 'characters', component: CharacterListComponent },
    { path: 'characters/:id', component: CharacterDetailComponent }
];

const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app/characters' },
    { path: 'error', component: ErrorLayoutComponent, children: ErrorRoutes },
    { path: 'app', component: ViewportLayoutComponent, children: ViewportRoutes }
    // { path: '**', pathMatch: 'full', redirectTo: 'error/404' }
];

@NgModule({
    imports: [ RouterModule.forRoot(AppRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }