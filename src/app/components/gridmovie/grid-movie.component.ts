import {Component, Injectable, Input, OnInit} from '@angular/core';
import {FilmService} from "../../services/film.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-grid-movie',
  templateUrl: './grid-movie.component.html',
  styleUrls: ['./grid-movie.component.css']
})

export class GridMovieComponent implements OnInit {

  @Input() movieType: String = "POPULAR";
  movies: Movie[] = [];

  constructor(private filmService: FilmService) {
  }

  ngOnInit(): void {
    console.log("onInit called")
    this.getMoviesByType(this.movieType);
  }

  getMoviesByType(type: String) {
    this.filmService.getMovies(type).subscribe(movies => this.movies = movies)
  }
}
