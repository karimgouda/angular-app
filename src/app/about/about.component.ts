import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  searchWork:string='';
  mov:any[]=[];
  imagePath:string ='https://image.tmdb.org/t/p/w500';
  constructor(private _ApiService:ApiService) { }

  ngOnInit(): void {
    localStorage.setItem("current","movie");

    this._ApiService.MoviesPageTow().subscribe((data)=>{

      this.mov=data.results
    })
  }

}
