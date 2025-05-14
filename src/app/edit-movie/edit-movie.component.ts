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
  movie: any = {};

  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getMovie(Number(id));
  }

  async getMovie(id: number): Promise<void> {
    this.movie = await this.moviesService.getMovie(id);
  }

  async editMovie(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id') as unknown as number;
    await this.moviesService.updateMovie(id, this.movie);
    alert('Película editada con éxito');
    this.router.navigate(['/movies']);
  }
}
