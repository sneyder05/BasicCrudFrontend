import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { UIModule } from '../ui/ui.module';
import { CharacterListComponent } from './character/list';
import { Page404Component } from './error/error-404';

@NgModule({
    imports: [
        CommonModule,
        UIModule
    ],
    declarations: [
        Page404Component,
        CharacterListComponent
    ]
})
export class PagesModule {}