import { Component, Input, OnInit, AfterContentInit } from '@angular/core';

import { Movie } from '../../interfaces/cartelera-response';

// import Swiper bundle with all modules installed
 import Swiper from 'swiper';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterContentInit {

  @Input() movies: Movie[] = [];

  swiper = new Swiper('');

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void{
    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
    });
  }

  onSlidePrev(){
    this.swiper.slidePrev();
  }

  onSlideNext(){
    this.swiper.slideNext();
  }

}
