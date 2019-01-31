import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

// You always import the Component symbol from the Angular core library and annotate the component class with @Component.
// @Component is a decorator function that specifies the Angular metadata for the component.

@Component({
  selector: 'app-heroes', // the component's CSS element selecto
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };

  constructor() {
  }

  // The ngOnInit is a lifecycle hook. Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
