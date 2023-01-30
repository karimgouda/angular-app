import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  array:any[]=[];
  searchWork:string = '';
  imagePath:string ='https://image.tmdb.org/t/p/w500';
  constructor(private _ApiService:ApiService) { }

  ngOnInit(): void {

    localStorage.setItem("current","movieShow");

    this._ApiService.movieTv().subscribe((data)=>{
      this.array = data.results
    })
  }

}
