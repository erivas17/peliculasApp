import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CarteleraResponse } from '../interfaces/cartelera-response';
import { Movie } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) {

  }

  get params(){
    return{
      api_key: 'fc0ddd26f38a65328247787c0d76c30c',
      language: 'en-US',
      page: this.carteleraPage,
    }
  }

  getCartelera(): Observable<Movie[]>{

    if(this.cargando){
      return of([]);
    }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.url}/movie/now_playing`,{
      params: this.params
    }).pipe(
      map( (resp) => resp.results),
      tap( () => {
          this.carteleraPage +=1;
          this.cargando = false;
      })
    )
  }
}
