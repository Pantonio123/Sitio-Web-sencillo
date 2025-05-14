import { Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

export const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/create', component: AddMovieComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: 'movies/:id/edit', component: EditMovieComponent },
  { path: '**', redirectTo: '/movies', pathMatch: 'full' },
];