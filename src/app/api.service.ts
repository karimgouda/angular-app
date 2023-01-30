import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private _HttpClient:HttpClient) { }

  trendMovei(tv:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${tv}/week?api_key=f9688286099ba5bce529222114e95fce`)
  }

  movieDetiles(id:string|null):Observable<any>{

    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f9688286099ba5bce529222114e95fce`)
  }

  getMoviesPage(pNum:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pNum}&with_watch_monetization_types=flatrate`)

  }


  MoviesPageTow():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`)

  }

  movieTv():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=f9688286099ba5bce529222114e95fce`)
  }
}
