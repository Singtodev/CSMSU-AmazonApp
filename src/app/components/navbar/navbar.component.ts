import { Component, OnInit } from '@angular/core';
import { User } from '../../pages/login/login.component';
import { UserService } from '../../services/shares/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public user: User | null = null;

  constructor(public us: UserService) {}
  ngOnInit(): void {
    this.us.getSession();
    this.user = this.us.user;
  }

  onLogout() {
    this.us.logout();
  }
}
