import {Component, Injectable, OnInit} from '@angular/core';
import {FilmService} from "../../services/film.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-gridfilm',
  templateUrl: './grid-movie.component.html',
  styleUrls: ['./grid-movie.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class GridMovieComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private filmService: FilmService) {
  }

  ngOnInit(): void {
    console.log("onInit called")
    this.getMoviesByType("TOP_RATED");
  }

  getMoviesByType(type: String) {
    this.filmService.getMovies(type).subscribe(movies => this.movies = movies)
  }
}
