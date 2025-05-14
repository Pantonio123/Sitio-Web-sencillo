import { Component } from '@angular/core';
import { MoviesService } from './../movies.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
  movie = {
    title: '',
    synopsis: '',
    cover: 'image.png',
    year: null,
  };

  constructor(private moviesService: MoviesService, private router: Router) {}

  async addMovie(): Promise<void> {
    await this.moviesService.addMovie(this.movie);
    alert('Película agregada con éxito');
    this.router.navigate(['/movies']);
  }
}