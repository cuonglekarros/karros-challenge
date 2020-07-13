import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-movie',
  templateUrl: './tab-movie.component.html',
  styleUrls: ['./tab-movie.component.css']
})
export class TabMovieComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick($event: number) {
    console.log($event.toLocaleString())
  }
}
