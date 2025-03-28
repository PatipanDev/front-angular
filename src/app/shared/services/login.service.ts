import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  urllogin = `${environment.apiUrl}/api/login`
  urlprofile = `${environment.apiUrl}/api/user`
  

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
