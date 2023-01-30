import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchWork:string='';
imagePath:string ='https://image.tmdb.org/t/p/w500';

data:any[]=[];
tv:any[]=[];

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}


page :any = new Array(10);
  constructor(private _ApiService:ApiService) { }

  ngOnInit(): void {
    localStorage.setItem("current","home");

    this._ApiService.trendMovei('movie').subscribe((response)=>{

      this.data = response.results.slice(0,20);
      console.log(this.data);

    })

    this._ApiService.trendMovei('tv').subscribe((response)=>{

      this.tv = response.results.slice(0,10);

    })

  }


  getPage(p:number)
  {
    this._ApiService.getMoviesPage(p).subscribe((response)=>{

      this.data = response.results.slice(0,10);

    })
  }


}
