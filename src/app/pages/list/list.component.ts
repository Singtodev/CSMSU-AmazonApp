import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { UserService } from '../../services/shares/user.service';
import { CommonModule, Location } from '@angular/common';
import CoffeeData from '../../../assets/data.json';
import { ProductComponent } from '../../components/cards/product/product.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavbarComponent , ProductComponent , FormsModule , CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {

  public coffees = CoffeeData['Coffee'];
  public filterCate: any = [];
  public cateId : string | null = null;
  constructor(public us: UserService, public location: Location , public ar: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.us.getSession();
    let dict: any = {
      "hot": "ร้อน",
      "cool": "เย็น",
      "smooty": "ปั่น"
    };
    this.ar.paramMap.subscribe(params => {
      this.cateId = dict[String(params.get('id'))] || null;
    });

    this.filterCategory();
  }

  goBack() {
    this.location.back()
  }


  filterCategory(){
    this.filterCate = this.coffees.filter((coffee)=> coffee.TypeProduct.TypeName === this.cateId);
  }

}
