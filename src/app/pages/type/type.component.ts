import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/shares/user.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './type.component.html',
  styleUrl: './type.component.scss',
})
export class TypeComponent implements OnInit {
  constructor(public us: UserService , public router: Router ) {
  }

  ngOnInit(): void {
    console.log(this.us.getSession())
  }


  gotoListPage(type: string){
    this.router.navigate(['/list/'+type]);
  }


}
