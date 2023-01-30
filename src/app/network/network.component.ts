import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ ApiService} from '../api.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  imagePath:string ='https://image.tmdb.org/t/p/w500';
  movieId:string|null='';
  movieData :any;
  constructor(private _ActivatedRoute:ActivatedRoute , private _ApiService:ApiService) { }

  ngOnInit(): void {

    this.movieId = this._ActivatedRoute.snapshot.paramMap.get("id");

    this._ApiService.movieDetiles(this.movieId).subscribe((respons)=>{
      this.movieData = respons;
    })


  }

}
