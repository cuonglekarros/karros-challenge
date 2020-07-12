import {Injectable} from '@angular/core';
import {Banner} from "../models/banner";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=a7b3c9975791294647265c71224a88ad&language=en-US&page=1";
  private popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=a7b3c9975791294647265c71224a88ad&language=en-US&page=1";
  constructor(private httpClient: HttpClient) {
  }

  getBanners(): Observable<Banner[]> {
    let banners: Banner[] = [];
    this.getNowPlayingMovies().subscribe(data => {
      data.results.forEach(function (item) {
        let imgUrl = "https://image.tmdb.org/t/p/original";
        let banner: Banner = {
          title: item.original_title,
          description: item.overview,
          posterUrl: imgUrl + item.backdrop_path
        }
        banners.push(banner)
      })
    });
    return of(banners);
  }

  getMovies(type: String): Observable<Movie[]> {
    let movies: Movie[] = [];
    if(type === "POPULAR") {
      this.getPopularMovies().subscribe(data => {
        data.results.forEach(function (item) {
          let imgUrl = "https://image.tmdb.org/t/p/original";
          let movie: Movie = {
            title: item.title,
            overview: item.overview,
            poster_path: imgUrl + item.poster_path,
            vote_average: item.vote_average,
          }
          movies.push(movie);
        })
      });
      return of(movies);
    }
  }

  private getNowPlayingMovies(): Observable<any> {
    return this.httpClient.get<any>(this.nowPlayingUrl).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  private getPopularMovies(): Observable<any> {
    return this.httpClient.get<any>(this.popularUrl).pipe(
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
}