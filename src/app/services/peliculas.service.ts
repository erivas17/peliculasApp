import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) {

  }

  getCartelera(): Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=fc0ddd26f38a65328247787c0d76c30c&language=en-US&page=1');
  }
}
