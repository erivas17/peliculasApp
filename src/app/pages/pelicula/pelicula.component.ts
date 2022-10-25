import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';

import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula = {} as MovieResponse;

  constructor( private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService,
              private location: Location) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.peliculasService.getPeliculaDetail(id).subscribe( movie => {
      console.log(movie);
      this.pelicula = movie;
    })
  }

  regresar(){
    this.location.back();
  }
}
