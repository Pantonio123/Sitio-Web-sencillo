import { Component } from '@angular/core';
import { MoviesService } from './../movies.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  imports: [RouterModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent 
{
  movie: any = {};

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getMovie(Number(id));
  }
  async getMovie(id: number): Promise<void> {
    this.movie = await this.moviesService.getMovie(id);
  }
  async editMovie(): Promise<void> {
    const updatedMovie = {
      title: this.movie.title,
      synopsis: this.movie.synopsis,
      year: this.movie.year,
    };

    await this.moviesService.updateMovie(this.movie.id, updatedMovie);
    alert('Película actualizada con éxito');
    this.router.navigate(['/movies']);
  }
}
