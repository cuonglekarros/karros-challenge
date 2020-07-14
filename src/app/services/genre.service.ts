import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Genre} from "../models/genre";
import {CONSTANT} from "../core/constant";
import {FormatString} from "../utils/StringUtils";
import {throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  getAllGenres(): Genre[] {
    let genres: Genre[] = [];
    let requestURL: string = this.buildRequestGenresUrl();
    this.httpClient.get<any>(requestURL).pipe(
      map(this.extractData),
      catchError(this.handleError)).subscribe(response => {
      genres = response.genres;
    });
    return genres;
  }


  private buildRequestGenresUrl() {
    return FormatString(CONSTANT.GENRE_BASE_URL, CONSTANT.API_KEY);
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
