import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable , BehaviorSubject} from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data:any = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem("userToken")!=null){
      this.user();
      _Router.navigate([`${localStorage.getItem('current')}`]);
    }
   }

  sendRegister(formValue:object):Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formValue);
  }

  sendLogin(formValue:object):Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',formValue);
  }

  user(){
    this.data.next(jwt_decode(JSON.stringify(localStorage.getItem("userToken"))));
  }
}
