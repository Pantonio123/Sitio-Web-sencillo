import { Component } from '@angular/core';
import { MoviesService } from './../movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  imports: [FormsModule],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {
  movie: any = {}

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getMovie(Number(id));
  }
  
  isMovieValid(): boolean {
    const isValid = !!(this.movie.title && this.movie.synopsis && this.movie.year && this.movie.cover);

    if (!isValid) {
      alert('Por favor, completa todos los campos.');
    }

    return isValid;
  };

  async getMovie(id: number): Promise<void> {
    this.movie = await this.moviesService.getMovie(id);
  }

  async editMovie(): Promise<void> {
    if (this.isMovieValid()) {
      const id = this.route.snapshot.paramMap.get('id') as unknown as number;
      await this.moviesService.updateMovie(id, this.movie);
      alert('Película editada con éxito');
      this.router.navigate(['/movies']);
    }
  }

  async deleteMovie(): Promise<void> {
  const confirmDelete = confirm("¿Estás seguro de que deseas eliminar esta película?");

  if (!confirmDelete) {
    return;
  }

  const id = this.route.snapshot.paramMap.get('id') as unknown as number;

  try {
    await this.moviesService.DeleteMovie(id, this.movie);
    alert('Película eliminada con éxito');
    this.router.navigate(['/movies']);
  } catch (error) {
    console.error('Error al eliminar la película:', error);
    alert('Ocurrió un error al eliminar la película');
  }
}

  async returnMovies(): Promise<void> {
    this.router.navigate(['/movies']);
  }
}

