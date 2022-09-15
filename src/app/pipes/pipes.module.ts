import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CutextPipe } from './cutext.pipe';
import { PosterPipe } from './poster.pipe';



@NgModule({
  declarations: [
    CutextPipe,
    PosterPipe
  ],
  exports: [
    CutextPipe, 
    PosterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
