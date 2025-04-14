import { Component } from '@angular/core';
import { MoviesService } from './../movies.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [RouterModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})



export class MoviesComponent {

  constructor(private moviesService: MoviesService) {}
  movies: any = [];
  ngOnInit(): void {
    this.getMovies();
  }
  async getMovies(): Promise<void> {
    this.movies = await this.moviesService.getMovies();
  }
  cleanId(id: any): string {
    return String(id || '1').replace(/[^a-zA-Z0-9-]/g, ''); 
  }
}

