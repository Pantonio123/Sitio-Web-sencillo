import { Component } from '@angular/core';
import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-movie',
  imports: [RouterModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent 
{
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}
    movie: any = {};
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.getMovie(Number(id));
    }
    async getMovie(id: number): Promise<void> {
      this.movie = await this.moviesService.getMovie(id);
    }

}
