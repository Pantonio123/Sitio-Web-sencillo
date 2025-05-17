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
    cover: '',
    year: null,
  };

  constructor(private moviesService: MoviesService, private router: Router) {}

  async addMovie(): Promise<void> {
    if (this.isMovieValid()) {
      await this.moviesService.addMovie(this.movie);
      alert('Película agregada con éxito');
      this.router.navigate(['/movies']);
    }
    
  }

  isMovieValid(): boolean {
    const isValid = !!(this.movie.title && this.movie.synopsis && this.movie.year && this.movie.cover);

    if (!isValid) {
      alert('Por favor, completa todos los campos.');
    }

    return isValid;
  };
}