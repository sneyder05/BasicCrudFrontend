import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DesignSystemModule } from '../design-system/design-system.module';
import { UIModule } from '../ui/ui.module';
import { CharacterListComponent } from './character/list';
import { CharacterDetailComponent } from './character/detail';
import { Page404Component } from './error/error-404';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DesignSystemModule,
        UIModule
    ],
    declarations: [
        Page404Component,
        CharacterListComponent,
        CharacterDetailComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class PagesModule {}