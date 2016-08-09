/**
 * Created by Roman on 09.08.2016.
 */

import {provideRouter, RouterConfig}  from '@angular/router';

import {HeroesComponent} from './components/heroes.component';

const routes:RouterConfig = [{
    path: 'heroes',
    component: HeroesComponent
}];

export const appRouterProviders = [
    provideRouter(routes)
];