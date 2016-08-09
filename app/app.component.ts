/**
 * Created by Roman on 09.08.2016.
 */
import {Component} from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <nav>
            <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
            <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
    title = 'Tour of Heroes';
}