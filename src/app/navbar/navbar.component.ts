import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // constructor(private router: Router){
  //   fd
  // }
  isCollapsed = false;
  // logout(): void{
  //   localStorage.removeItem('access_token')
  // }

}
