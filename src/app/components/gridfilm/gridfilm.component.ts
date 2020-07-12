import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../services/film.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-gridfilm',
  templateUrl: './gridfilm.component.html',
  styleUrls: ['./gridfilm.component.css']
})
export class GridfilmComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private filmService: FilmService) {
  }

  ngOnInit(): void {
    this.filmService.getMovies("POPULAR").subscribe(movies => this.movies = movies)
  }
}
