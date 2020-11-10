import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ErrorLayoutComponent } from './error';
import { ViewportLayoutComponent } from './viewport';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        ErrorLayoutComponent,
        ViewportLayoutComponent
    ]
})
export class LayoutModule {}