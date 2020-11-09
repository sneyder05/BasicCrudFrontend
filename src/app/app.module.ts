import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIModule } from './ui/ui.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        NgbModule,
        PagesModule,
        UIModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
