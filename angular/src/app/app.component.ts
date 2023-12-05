import { Component } from '@angular/core';
import CaseClient from '@casejs/case-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  pokemons: { id: number; name: string; type: string; image: string }[] = [];

  async ngOnInit() {
    const cs = new CaseClient();

    this.pokemons = await cs.from('pokemon').find();
  }
}
