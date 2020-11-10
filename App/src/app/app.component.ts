import { Component } from '@angular/core';
const x = [1,2];

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    public title = 'App';
}