import {Component, OnInit} from '@angular/core';
import {Banner} from "../../models/banner";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banners: Banner[];

  constructor(private filmService: MovieService) {

  }

  ngOnInit(): void {
    this.banners =this.filmService.getBanners();
  }
}
