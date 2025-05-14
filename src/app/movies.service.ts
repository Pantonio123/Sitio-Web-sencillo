import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private moviesUrl = 'https://three-2-sitio-web-sencillo-a5n1.onrender.com/movies';
  // private moviesUrl = 'http://127.0.0.1:8000/api/movies/';

  constructor() {}

  async getMovies(): Promise<any[]>{
    const data = await fetch(this.moviesUrl);
    return await data.json();
  }

  async getMovie(id: number): Promise<any[]>{
    const data = await fetch(this.moviesUrl + id);
    return await data.json();
  }

  async addMovie(movieData: any): Promise<void> {
    await fetch(this.moviesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(movieData),
    })
  }

  async updateMovie(id: number, movieData: any): Promise<void> {
    await fetch(this.moviesUrl + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieData),
    })
  }
}
