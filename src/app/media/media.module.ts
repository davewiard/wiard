import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
@NgModule({
  imports: [
    CommonModule,
    MediaRoutingModule
  ],
  declarations: [TvComponent, MoviesComponent, MediaComponent],
  exports: [
    MoviesComponent,
    TvComponent,
    MediaRoutingModule
  ]
})
export class MediaModule { }
