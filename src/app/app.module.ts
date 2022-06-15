import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { CharacteristicComponent } from './characteristic/characteristic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultListComponent,
    MovieCardComponent,
    CharacteristicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
