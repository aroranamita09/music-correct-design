import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './body/cards/cards.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchboxComponent } from './header/searchbox/searchbox.component';
import { CastComponent } from './header/cast/cast.component';
import { MusicService } from './music.service';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './body/cards/add/add.component';
import { DeleteComponent } from './body/cards/delete/delete.component';
import { UpdateComponent } from './body/cards/update/update.component';
import { CardDisplayComponent } from './body/cards/card-display/card-display.component';
import { SearchboxService } from './header/searchbox/searchbox.service';
import { GetllTracksInLocalComponent } from './getll-tracks-in-local/getll-tracks-in-local.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    CardsComponent,
    SearchlistComponent,
    PageNotFoundComponent,
    SearchboxComponent,
    CastComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    CardDisplayComponent,
    GetllTracksInLocalComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [MusicService, SearchboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
