import {Component, Injectable, OnInit} from '@angular/core';
import {FilmService} from "../../services/film.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-gridfilm',
  templateUrl: './gridfilm.component.html',
  styleUrls: ['./gridfilm.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class GridfilmComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private filmService: FilmService) {
  }

  ngOnInit(): void {
    this.getMoviesByType("POPULAR");
  }

  getMoviesByType(type: String) {
    this.filmService.getMovies(type).subscribe(movies => this.movies = movies)
  }
}
