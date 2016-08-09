/**
 * Created by Roman on 23.07.2016.
 */
import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Config} from './../config';

import {Hero} from './../models/hero';

import {HeroService} from './../services/hero.service';
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'my-hero-detail',
    templateUrl: Config.path.templates + '/hero-detail.component.html',
    providers: [HeroService]
})

export class HeroDetailComponent implements OnInit, OnDestroy {

    @Input()
    hero:Hero;
    sub: Subscription;

    constructor(

        private heroService:HeroService,
        private route:ActivatedRoute

    ) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then((hero: Hero) => {
                    this.hero = hero
                });
        });
    }

    goBack() {
        window.history.back();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}