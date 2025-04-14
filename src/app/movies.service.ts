import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private moviesUrl = 'https://32-sitio-web-sencillo-production-8512.up.railway.app/movies/';
  //private moviesUrl = 'http://127.0.0.1:8000/api/movies/';

  constructor() {}

async getMovies(): Promise<any[]>{
  const data = await fetch(this.moviesUrl);
  return await data.json();
}

async getMovie(id: number): Promise<any[]>{
  const data = await fetch(this.moviesUrl + id);
  return await data.json();
}

}
