import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
import { MovieList } from '../model/movie';
import { Genre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  public api = environment.endPoint;
  public errorMessage = '';
  
  constructor(
    private http: HttpClient) 
    {}

    getAllMovies(): Observable<MovieList> {
      return this.http.get<MovieList>(`${this.api}/movies`)
                  .pipe(filter(items => !!items), map((items: MovieList) => items));
    }

    getGenres(): Observable<Genre[]> {
      return this.http.get<Genre[]>(`${this.api}/genres`)
                  .pipe(filter(items => !!items), map((items: Genre[]) => items));
    }

}
