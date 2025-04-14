import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    {
        path: 'movies', component: MoviesComponent
    },
    {
        path: 'movies/:id', component: MovieComponent
    },
    {
        path: '**', redirectTo: '/movies', pathMatch: 'full'}
];
