import {Injectable} from '@angular/core';
import {Banner} from "../../models/banner";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor() {
  }

  getBanners(): Banner[] {
    let banners: Banner[] = [
      {title: "title-01", description: "description-1"},
      {title: "title-02", description: "description-2"},
      {title: "title-03", description: "description-3"}];
    return banners;
  }
}
