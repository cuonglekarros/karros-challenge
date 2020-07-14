import {Injectable} from '@angular/core';
import {Banner} from "../models/banner";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Movie} from "../models/movie";
import {CONSTANT} from "../core/constant";
import {FormatString} from "../utils/StringUtils";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private httpClient: HttpClient) {
  }

  getBanners(): Observable<Banner[]> {
    let banners: Banner[] = [];
    let requestURL: string = this.buildRequestUrl(CONSTANT.MOVIE_TYPE_NOW_PLAYING);
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
    return of(banners);
  }

  getMovies(type: string): Observable<Movie[]> {
    let movies: Movie[] = [];
    let requestURL: string = this.buildRequestUrl(type);
    this.callRestRequestGetMovies(requestURL).subscribe(data => {
      data.results.forEach(function (item) {
        if (item.title.length > 15) {
          item.title = item.title.substring(0, 14) + "...";
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
    return of(movies);
  }

  private callRestRequestGetMovies(url: string): Observable<any> {
    return this.httpClient.get<any>(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

  private buildRequestUrl(movieType: string): string {
    return FormatString(CONSTANT.BASE_URL, movieType, CONSTANT.API_KEY);
  }
}
