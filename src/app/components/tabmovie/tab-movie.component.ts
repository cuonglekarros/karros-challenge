import {Component, OnInit} from '@angular/core';
import {GridMovieComponent} from "../gridmovie/grid-movie.component";

@Component({
  selector: 'app-tabfilm',
  templateUrl: './tab-movie.component.html',
  styleUrls: ['./tab-movie.component.css']
})
export class TabMovieComponent implements OnInit {

  constructor(private gridfilmComponent: GridMovieComponent) {
  }

  ngOnInit(): void {
  }


  onClick($event: number) {
    console.log($event.toLocaleString())
    this.gridfilmComponent.getMoviesByType("UPCOMING")
  }
}
