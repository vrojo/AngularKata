import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../models/movie";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  moviePicture!: string;
  editIcon!: string;

  constructor() { }

  ngOnInit(): void {
    this.moviePicture = "../../assets/icon_poster.svg";
    this.editIcon = "../../assets/icon_pencil.svg";
  }

  isAdultMovie(): string {
    return this.movie.isAdult ? "Yes": "No";
  }

  showEndYear() {
    return "-";
  }
}
