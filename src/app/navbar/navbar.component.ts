import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  login:boolean = false;

constructor(private _AuthService:AuthService , private _Router:Router) { }

  ngOnInit(): void {

    this._AuthService.data.subscribe(()=>{

      if(this._AuthService.data.getValue()==null){
        this.login = false;
      }else{
        this.login=true;
      }
    })
  }


  logout(){
    localStorage.removeItem("userToken");
    localStorage.removeItem("current");
    this._AuthService.data.next(null);
    this._Router.navigate(['login']);
  }
}
