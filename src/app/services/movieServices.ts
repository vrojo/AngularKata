import {Injectable} from "@angular/core";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieServices {
  movies: Movie[] = [
    {
      id: "1",
      originalTitle: "Showtime at the Apollo",
      primaryTitle: "Showtime at the Apollo",
      genre: "Animation",
      titleType: "Comédie",
      isAdult: true,
      startYear: "1999",
      endYear: "N-",
      runtimeMinutes: "123"
    },
    {
      id: "2",
      originalTitle: "The Passenger",
      primaryTitle: "The Passenger",
      genre: "Drame",
      titleType: "Drame",
      isAdult: true,
      startYear: "2015",
      endYear: "N-",
      runtimeMinutes: "432"
    },
    {
      id: "3",
      originalTitle: "Alien",
      primaryTitle: "Alien",
      genre: "Horreur",
      titleType: "Horreur",
      isAdult: true,
      startYear: "1995",
      endYear: "N-",
      runtimeMinutes: "753"
    },
    {
      id: "4",
      originalTitle: "Prédator",
      primaryTitle: "Predator",
      genre: "Action/Horreur",
      titleType: "Action/Horreur",
      isAdult: true,
      startYear: "1998",
      endYear: "N-",
      runtimeMinutes: "698"
    },
    {
      id: "5",
      originalTitle: "Avengers",
      primaryTitle: "Avengers",
      genre: "Action",
      titleType: "Action",
      isAdult: true,
      startYear: "2013",
      endYear: "N-",
      runtimeMinutes: "872"
    },
    {
      id: "6",
      originalTitle: "La Légende du Cavalier sans tête",
      primaryTitle: "The Legend of Sleepy Hollow",
      genre: "Fantaisie",
      titleType: "Fantaisie",
      isAdult: true,
      startYear: "2004",
      endYear: "N-",
      runtimeMinutes: "123"
    }
  ];

  searchMovie(searchInput: string): Movie[] {
    if (searchInput === "") {
      return this.movies;
    }
    return this.movies.filter(m => m.primaryTitle.includes(searchInput) || m.originalTitle.includes(searchInput));
  }
}
