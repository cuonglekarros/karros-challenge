import {Component, OnInit} from '@angular/core';
import {Banner} from "../../../models/banner";
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banners: Banner[];
  images = ["/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg", "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg", "/jMO1icztaUUEUApdAQx0cZOt7b8.jpg"].map((n) => `https://image.tmdb.org/t/p/original${n}`);


  constructor(private filmService: FilmService) {
  }

  ngOnInit(): void {
    this.banners = this.filmService.getBanners();
  }
}
