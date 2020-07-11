import {Component, OnInit} from '@angular/core';
import {Banner} from "../../models/banner";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banners: Banner[] = [
    {title: "title 01", description: "description 01"},
    {title: "title 02", description: "description 02"},
    {title: "title 03", description: "description 03"}
  ]
  images = ["head-load", "head-load", "head-load"].map((n) => `../assets/${n}.png`);


  constructor() {
  }

  ngOnInit(): void {
  }
}
