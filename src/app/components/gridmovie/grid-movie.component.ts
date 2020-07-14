import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-grid-movie',
  templateUrl: './grid-movie.component.html',
  styleUrls: ['./grid-movie.component.css']
})

export class GridMovieComponent implements OnInit {

  @Input() movies: Movie[] = [];

  ngOnInit(): void {
    console.log("grid movie - onInit called")
  }
}
