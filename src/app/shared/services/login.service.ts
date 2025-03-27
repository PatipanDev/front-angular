import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  urllogin = 'http://10.7.10.18:7890/api/login'
  urlprofile = 'http://10.7.10.18:7890/api/user'
  

  login(userAccout: any):Observable<any>{
    console.log('service', userAccout )
    let header ={
      'Content-type': 'application/json'
    };
    return this.http.post<any>(this.urllogin, userAccout, {headers : header})
  }

  
  getUserProfile():Observable<any>{
    let header ={};
    let access_token = localStorage.getItem('access_token')
    if(access_token){
      header ={
        'Content-type': 'application/json'
      };
    }
    return this.http.post<any>(this.urlprofile, {headers : header})
  }
}
