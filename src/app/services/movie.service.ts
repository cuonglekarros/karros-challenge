import {Injectable} from '@angular/core';
import {Banner} from "../models/banner";
import {Observable} from "rxjs";
import {Movie} from "../models/movie";
import {CONSTANT} from "../core/constant";
import {FormatString} from "../utils/StringUtils";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private restService: RestService) {
  }

  getBanners(): Banner[] {
    let banners: Banner[] = [];
    let requestURL: string = this.buildRequestMovieUrl(CONSTANT.MOVIE_TYPE_NOW_PLAYING);
    this.callRestRequestGetMovies(requestURL).subscribe(data => {
      data.results.forEach(function (item) {
        let banner: Banner = {
          title: item.original_title,
          description: item.overview,
          posterUrl: CONSTANT.BASE_IMAGE_URL + item.backdrop_path
        }
        banners.push(banner)
      })
    });
    return banners;
  }

  getMovies(type: string): Movie[] {
    let movies: Movie[] = [];
    let requestURL: string = this.buildRequestMovieUrl(type);
    this.callRestRequestGetMovies(requestURL).subscribe(data => {
      data.results.forEach(function (item) {
        if (item.title.length > 50) {
          item.title = item.title.substring(0, 40) + "...";
        }
        let movie: Movie = {
          title: item.title,
          overview: item.overview,
          poster_path: CONSTANT.BASE_IMAGE_URL + item.poster_path,
          vote_average: item.vote_average,
        }
        movies.push(movie);
      })
    });
    return movies;
  }

  private callRestRequestGetMovies(url: string): Observable<any> {
    return this.restService.callGetRequest(url);
  }

  private buildRequestMovieUrl(movieType: string): string {
    return FormatString(CONSTANT.MOVIE_BASE_URL, movieType, CONSTANT.API_KEY);
  }
}
