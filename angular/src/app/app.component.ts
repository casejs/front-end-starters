import { Component } from '@angular/core';
import CaseClient from '@casejs/case-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  pokemons: { id: number; name: string; type: string }[] = [];

  async ngOnInit() {
    const cs = new CaseClient();

    this.pokemons = await cs.from('pokemon').find();
  }

  async addPokemon() {
    const cs = new CaseClient();

    const pokemon: any = await cs.from('pokemon').create({
      name: 'Pikachu',
      type: 'Electric',
    });

    this.pokemons.push({
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.type,
    });
  }
}
