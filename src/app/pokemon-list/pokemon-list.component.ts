import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe(
      pokemons => this.pokemons = pokemons,
      error => console.error('Error fetching pokemons', error)
    );
  }

  getPokemonId(url: string): string {
    const id = url.split('/').filter(Boolean).pop();
    if (typeof id === 'string') {
      return id;
    }
    return ''; // หรือให้คืนค่าอื่นที่เหมาะสมในกรณีที่ id เป็น undefined
  }
  
}
