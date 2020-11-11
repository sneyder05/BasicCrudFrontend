import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UIModule } from '../ui/ui.module';
import { ErrorLayoutComponent } from './error';
import { ViewportLayoutComponent } from './viewport';

@NgModule({
    imports: [
        RouterModule,
        UIModule
    ],
    declarations: [
        ErrorLayoutComponent,
        ViewportLayoutComponent
    ]
})
export class LayoutModule {}