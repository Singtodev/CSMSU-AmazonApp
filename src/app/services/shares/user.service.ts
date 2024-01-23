import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from '../../pages/login/login.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: User | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public router: Router,
  ) {}

  setUser(user: User) {
    // assign to user variable
    this.user = user;
    // set new session user
    localStorage.setItem('login', JSON.stringify(user));
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getSession(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (!localStorage.getItem('login')) {
        if(this.router.url !== '/login'){
          this.router.navigate(['/login']);
        }
        return false;
      }
      try {
        let user = JSON.parse(localStorage.getItem('login') || 'null');
        if (!user) {
          this.router.navigate(['/login']);
        }
        this.setUser(user);
        return true;
      } catch (err) {
        localStorage.clear();
        return false;
      }
    }
    return true;
  }
}
