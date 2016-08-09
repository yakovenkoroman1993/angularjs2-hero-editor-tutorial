/**
 * Created by Roman on 09.08.2016.
 */
import {Component} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <a [routerLink]="['/heroes']">Heroes</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
    title = 'Tour of Heroes';
}