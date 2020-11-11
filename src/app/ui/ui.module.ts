import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesignSystemModule } from '../design-system/design-system.module';
import { PageTitleComponent } from './components/page-title';

@NgModule({
    imports: [
        CommonModule,
        DesignSystemModule
    ],
    declarations: [
        PageTitleComponent
    ],
    exports: [
        PageTitleComponent
    ]
})
export class UIModule {}