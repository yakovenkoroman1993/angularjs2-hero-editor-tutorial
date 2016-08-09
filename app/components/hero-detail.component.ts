/**
 * Created by Roman on 23.07.2016.
 */
import { Component, Input } from '@angular/core';
import { Config } from '../config';

import { Hero } from '../models/hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: Config.path.templates + '/hero-detail.component.html'
})

export class HeroDetailComponent {
    constructor() {}
    @Input()
    hero: Hero;
}