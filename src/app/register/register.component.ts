import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerError:string ='';

  register = new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(7)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(7)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern('^[A-Z][0-9]{2,6}$')]),
    age:new FormControl(null , [Validators.min(16), Validators.max(80)]),
  })

  registerMethod(register:FormGroup){

    this._AuthService.sendRegister(register.value).subscribe((response)=>{

      if(response.message=="success"){

        this ._Router.navigate(['login']);
      }else{
         this.registerError = response.errors.email.message;
      }
    })

  }
  constructor(private _AuthService:AuthService , private _Router:Router) { }

  ngOnInit(): void {
  }

}
