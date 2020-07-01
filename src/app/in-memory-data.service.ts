import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr. Chapatin' },
      { id: 12, name: 'El Mono' },
      { id: 13, name: 'Bombastick' },
      { id: 14, name: 'Celeridad' },
      { id: 15, name: 'Magnetismo' },
      { id: 16, name: 'El Goma' },
      { id: 17, name: 'Dínamo' },
      { id: 18, name: 'Dr. ICQ' },
      { id: 19, name: 'Magma mia' },
      { id: 20, name: 'Tornadito' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}