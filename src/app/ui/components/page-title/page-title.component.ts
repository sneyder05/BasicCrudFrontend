import { Component, Input } from '@angular/core';

@Component({
    selector: 'page-title',
    templateUrl: './page-title.component.html',
    styleUrls: [ './page-title.component.scss' ]
})
export class PageTitleComponent {
    @Input() public title: string;
    @Input() public subtitle: string;
}