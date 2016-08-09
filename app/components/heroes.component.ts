import {Component, OnInit} from '@angular/core';
import {Config} from './../config';

import {Hero} from './../models/hero';
import {HeroDetailComponent} from './hero-detail.component';

import {HeroService} from './../services/hero.service'

@Component({
    selector: 'my-heroes',
    templateUrl: Config.path.templates + '/heroes.component.html',
    styleUrls: [Config.path.styles + '/heroes.component.css'],
    directives: [<any>HeroDetailComponent],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero:Hero;
    heroes:Hero[];

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {

        this.heroService.getHeroes()
            .then(heroes => {
                this.heroes = heroes
            });
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    constructor(private heroService:HeroService) {
    }
}