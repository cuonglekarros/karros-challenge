import { Component, OnInit } from '@angular/core';

export interface Tile {
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
  }

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'black'},
    {text: 'Four', cols: 1, rows: 1, color: 'green'},
    {text: 'Five', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Six', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Seven', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  onClick(tile: Tile) {
    console.log(tile.text);
  }
}
