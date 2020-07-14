import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie";
import {CONSTANT} from "../../core/constant";
import {Genre} from "../../models/genre";
import {GenreService} from "../../services/genre.service";

@Component({
  selector: 'app-tab-movie',
  templateUrl: './tab-movie.component.html',
  styleUrls: ['./tab-movie.component.css']
})
export class TabMovieComponent implements OnInit {

  movies: Movie[] = [];
  genres: Genre[] = [];

  constructor(private filmService: MovieService, private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.loadMoviesByType(CONSTANT.MOVIE_TYPE_POPULAR);
    this.genres = this.genreService.getAllGenres();
  }

  loadMoviesByType(type: string) {
    this.movies = this.filmService.getMovies(type);
  }

  onClick($event: number) {
    console.log($event.toLocaleString())
    switch ($event) {
      case 0:
        this.loadMoviesByType(CONSTANT.MOVIE_TYPE_POPULAR);
        break;
      case 1:
        this.loadMoviesByType(CONSTANT.MOVIE_TYPE_TOP_RATED);
        break;
      case 2:
        this.loadMoviesByType(CONSTANT.MOVIE_TYPE_UPCOMING);
        break;
    }
  }
}
