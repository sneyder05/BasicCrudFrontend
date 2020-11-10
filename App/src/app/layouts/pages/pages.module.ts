import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../layout.module';
import { CharacterListComponent } from './character/list';
import { Page404Component } from './error/error-404';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LayoutModule
    ],
    declarations: [
        Page404Component,
        CharacterListComponent
    ]
})
export class PagesModule {}