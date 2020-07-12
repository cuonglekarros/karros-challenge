import {Component, OnInit} from '@angular/core';
import {Banner} from "../../models/banner";
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banners: Banner[];

  constructor(private filmService: FilmService) {

  }

  ngOnInit(): void {
    this.filmService.getBanners().subscribe(banners => this.banners = banners);
  }
}
