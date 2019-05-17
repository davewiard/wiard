import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { MediaComponent } from './media.component';

const mediaRoutes: Routes = [
  {
    path: '',
    redirectTo: 'tv',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MediaComponent,
    children: [
      {
        path: 'movies',
        component: MoviesComponent
      },
      {
        path: 'tv',
        component: TvComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mediaRoutes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
