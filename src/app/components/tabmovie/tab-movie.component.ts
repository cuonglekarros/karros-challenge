import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../services/film.service";
import {Movie} from "../../models/movie";
import {CONSTANT} from "../../core/constant";

@Component({
  selector: 'app-tab-movie',
  templateUrl: './tab-movie.component.html',
  styleUrls: ['./tab-movie.component.css']
})
export class TabMovieComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private filmService: FilmService) {
  }

  ngOnInit(): void {
    this.loadMoviesByType(CONSTANT.MOVIE_TYPE_POPULAR);
  }

  loadMoviesByType(type: String) {
    this.filmService.getMovies(type).subscribe(movies => this.movies = movies);
  }

  onClick($event: number) {
    console.log($event.toLocaleString())
    switch ($event) {
      case 0: this.loadMoviesByType(CONSTANT.MOVIE_TYPE_POPULAR);
        break;
      case 1: this.loadMoviesByType(CONSTANT.MOVIE_TYPE_TOP_RATED);
        break;
      case 2: this.loadMoviesByType(CONSTANT.MOVIE_TYPE_UPCOMING);
        break;
    }
  }
}
