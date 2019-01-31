import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
// You always import the Component symbol from the Angular core library and annotate the component class with @Component.
// @Component is a decorator function that specifies the Angular metadata for the component.

@Component({
  selector: 'app-heroes', // the component's CSS element selecto
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };

  constructor(private heroService : HeroService) {
     // Reserve the constructor for simple initialization such as wiring constructor parameters to properties.
    // The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
  }

  /**
   * The new version waits for the Observable to emit the array of heroes— which could happen now or several minutes from now.
   * Then subscribe passes the emitted array to the callback, which sets the component's heroes property.
   * This asynchronous approach will work when the HeroService requests heroes from the server.
   */

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // The ngOnInit is a lifecycle hook. Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
