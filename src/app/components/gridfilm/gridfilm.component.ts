import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    let tile = new Tile();
    tile.text = "cuongle";
    tile.color = "black";
    tile.rows = 1;
    tile.cols = 1;

    this.tiles.push(tile);
  }

  tiles: Tile[] = [];

  onClick(tile: Tile) {
    console.log(tile.text);
  }
}
