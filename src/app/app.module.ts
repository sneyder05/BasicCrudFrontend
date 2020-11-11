import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LayoutModule } from './layouts/layout.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './routing/routing.module';
import { UIModule } from './ui/ui.module';
import { AppHttpInterceptor } from './interceptors/http.interceptor';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        PagesModule,
        LayoutModule,
        UIModule
    ],
    providers: [
        { provide: NZ_I18N, useValue: en_US },
        { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
