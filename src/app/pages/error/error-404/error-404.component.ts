import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'error-404',
    templateUrl: './error-404.component.html'
})
export class Page404Component implements OnInit {
    public title: string;
    public subTitle: string;
    public errorMessage: string;

    public ngOnInit(): void {
        this.title = '404 Page not found';
        this.subTitle = 'Oopps. The page you were looking for doesn\'t exist.';
        this.errorMessage = 'You may have mistyped the address or the page may have moved.';
    }
}