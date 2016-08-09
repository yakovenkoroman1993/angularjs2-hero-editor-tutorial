/**
 * Created by Roman on 27.07.2016.
 */
import {Injectable} from '@angular/core';
import {Hero} from './../models/hero'
import {HEROES} from './../mock-heroes'

@Injectable()
export class HeroService {

    getHeroes():Promise {

        return Promise.resolve(HEROES);
    }

    getHero(id:number) {
        
        return this
            .getHeroes()
            .then((heroes:Hero[]) => {
                return heroes.find((hero:Hero) => hero.id === id)
            });
    }
}