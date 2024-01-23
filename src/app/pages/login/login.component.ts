import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Users from '../../../assets/users.json';
import { UserService } from '../../services/shares/user.service';
import { Router } from '@angular/router';

export interface User {
  email: string;
  password: string;
  display_name: string;
  role: string;
  position: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public email: any = '';
  public password: any = '';
  public users: User[] = Users;

  constructor(public us: UserService , public router : Router , public location: Location) {}

  ngOnInit(): void {
    if(this.us.getSession()){
      this.router.navigate(['type']);
    }
  }

  onLogin() {
    // go find users in list
    let user = this.users.filter(
      (user) => user.email == this.email && user.password == this.password
    );

    if (user.length > 0) {
      //# logged in pass
      // step 1 set current user
      this.us.setUser(user[0]);
      // step 2 navigate to type page
      this.router.navigate(['/type']);
    }

    // not login
  }
}
