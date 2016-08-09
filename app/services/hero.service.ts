/**
 * Created by Roman on 27.07.2016.
 */
import {Injectable} from '@angular/core';
import {HEROES} from '../mock-heroes'

@Injectable()
export class HeroService {

    getHeroes(): Promise {

        return Promise.resolve(HEROES);
    }
}