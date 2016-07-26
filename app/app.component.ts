import {Component} from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'my-app',
    templateUrl: 'angularjs2/templates/app.component.html',
    styleUrls: ['angularjs2/styles/app.component.css'],
    directives: [<any>HeroDetailComponent]
})

export class AppComponent {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes = HEROES;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}