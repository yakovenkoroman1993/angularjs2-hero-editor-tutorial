/**
 * Created by Roman on 09.08.2016.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Config} from './../config';

import {Hero} from './../models/hero';

import {HeroService} from './../services/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: Config.path.templates + '/dashboard.component.html',
    providers: [HeroService]
})

export class DashboardComponent implements OnInit{
    heroes: Hero[];
    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}

    ngOnInit() {
        this.heroService.getHeroes()
            .then((heroes: Hero[]) => {
                this.heroes = heroes.slice(1,5)
            });
    }

    gotoDetail(hero: Hero) {
        this.router.navigate(['/detail', hero.id]);
    }
}
