import { Component, OnInit } from '@angular/core';
import {FilmService} from "../../services/film.service";
import {Movie} from "../../models/movie";

export class Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-gridfilm',
  templateUrl: './gridfilm.component.html',
  styleUrls: ['./gridfilm.component.css']
})
export class GridfilmComponent implements OnInit {

  tiles: Tile[] = [];
  movies: Movie[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getMovies("POPULAR").subscribe(movies => this.movies = movies);
    this.movies.forEach(function (movie) {
      let tile: Tile = {
        color: "Red",
        cols: 1,
        rows: 1,
        text: movie.title.toString()
      };
      this.tiles.push(tile);
    })
  }

  onClick(tile: Tile) {
    console.log(tile.text);
  }
}
