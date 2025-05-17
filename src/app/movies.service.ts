import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //private moviesUrl = 'https://three-2-sitio-web-sencillo-a5n1.onrender.com/api/movies';
  private moviesUrl = 'http://127.0.0.1:8000/api/movies/';

  constructor() {}

  async getMovies(): Promise<any[]>{
    const data = await fetch(this.moviesUrl, { mode: 'cors' });
    return await data.json();
  }

  async getMovie(id: number): Promise<any[]>{
    const data = await fetch(this.moviesUrl + id, { mode: 'cors'});
    return await data.json();
  }

  async addMovie(movieData: any): Promise<void> {
    await fetch(this.moviesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(movieData),
    })
  }

  async updateMovie(id: number, movieData: any): Promise<void> {
    await fetch(this.moviesUrl + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(movieData),
    })
  }
  async DeleteMovie(id: number, movieData: any): Promise<void> {
    await fetch(this.moviesUrl + id, {
    method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(movieData),
    })
  }
  async return(id: number, movieData: any): Promise<void> {
    await fetch(this.moviesUrl + id, {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(movieData),
    })
  }
  
}
