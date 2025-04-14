import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesComponent, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catalogo-peliculas';
}
