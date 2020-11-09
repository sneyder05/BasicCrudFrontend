import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from './components/page-title';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        PageTitleComponent
    ],
    exports: [
        PageTitleComponent
    ]
})
export class UIModule {}