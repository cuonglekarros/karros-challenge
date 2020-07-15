import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './components/banner/banner.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import { GridMovieComponent } from './components/gridmovie/grid-movie.component';
import { TabMovieComponent } from './components/tabmovie/tab-movie.component';
import {MatTabsModule} from "@angular/material/tabs";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    GridMovieComponent,
    TabMovieComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NoopAnimationsModule,
        MatGridListModule,
        MatTabsModule,
        HttpClientModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
