import {Injectable} from '@angular/core';
import {Genre} from "../models/genre";
import {CONSTANT} from "../core/constant";
import {FormatString} from "../utils/StringUtils";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private restService: RestService) {
  }

  getAllGenres(): Genre[] {
    let genres: Genre[] = [];
    let requestURL: string = this.buildRequestGenresUrl();
    this.restService.callGetRequest(requestURL).subscribe(response => {
      genres = response.genres;
    });
    return genres;
  }

  private buildRequestGenresUrl() {
    return FormatString(CONSTANT.GENRE_BASE_URL, CONSTANT.API_KEY);
  }
}
