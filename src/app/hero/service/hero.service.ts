import {Injectable} from '@angular/core'
import {HEROES} from "../mock-heroes";
import {Hero} from "../hero";
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService{
    private heroesUrl = 'app/heroes'; // URL to the web api

    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }

    getHero(id: number) : Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id ));

    }
}