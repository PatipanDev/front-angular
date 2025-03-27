import { Component, linkedSignal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private router:Router,
    private loginServ:LoginService
  ){}
  
  login(loginData:any):void{
    console.log(loginData)
    this.loginServ.login(loginData).subscribe(
      (res) =>{
        if(res.status == 'ok'){
          localStorage.setItem('access_token',res.token);
          this.router.navigate(['category'])
        }else{
          alert('login fail')
        }
      }
    )
  }

}
