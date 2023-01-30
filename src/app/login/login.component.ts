import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError:string ='';

  login = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern('^[A-Z][0-9]{2,6}$')]),
  })

  loginMethod(login:FormGroup){

    this._AuthService.sendLogin(login.value).subscribe((response)=>{

      if(response.message=="success"){

        localStorage.setItem("userToken", response.token);
        this._AuthService.user();
        this ._Router.navigate(['home']);

      }else{
         this.loginError = response.message;
      }
    })

  }
  constructor(private _AuthService:AuthService , private _Router:Router) { }


  ngOnInit(): void {
  }

}
