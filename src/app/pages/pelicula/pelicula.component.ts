import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location} from '@angular/common';

import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Cast } from 'src/app/interfaces/credits-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula = {} as MovieResponse;
  public cast: Cast[] = [];

  constructor( private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService,
              private location: Location,
            private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];


    combineLatest([
      this.peliculasService.getPeliculaDetail(id),
      this.peliculasService.getCast(id)
    ]).subscribe(([movie, cast]) => {
      if(!movie){
           this.router.navigateByUrl('/home');
           return;
         }

         this.pelicula = movie;

         this.cast = cast;
    });

    // this.peliculasService.getPeliculaDetail(id).subscribe( movie => {
    //   if(!movie){
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //
    //   this.pelicula = movie;
    // });
    //
    // this.peliculasService.getCast(id).subscribe(cast => {
    //   this.cast = cast;
    // });
  }

  regresar(){
    this.location.back();
  }


}
