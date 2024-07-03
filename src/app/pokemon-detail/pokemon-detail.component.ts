import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe(
      pokemon => this.pokemon = pokemon,
      error => console.error('Error fetching pokemon details', error)
    );
  }

  goBack(): void {
    this.location.back();
  }
}
