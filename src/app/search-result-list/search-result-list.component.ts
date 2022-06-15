import { Component, OnInit } from '@angular/core';
import {Movie} from "../models/movie";
import {MovieServices} from "../services/movieServices";

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {
  foundMovies !: Movie[];

  constructor(private movieServices: MovieServices) { }

  ngOnInit(): void {
    this.foundMovies = this.movieServices.searchMovie("");
  }

}
