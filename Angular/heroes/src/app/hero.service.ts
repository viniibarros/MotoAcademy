import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mocks/hero.mocks';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes():Hero[] {
    return HEROES
  }
}
