import { Component, Input } from '@angular/core';

export interface CoffeeProduct {
  ProductNo?:   number;
  ProductName?: string;
  TypeProduct?: TypeProduct;
  Description?: string;
  Image?:       string;
}

export interface TypeProduct {
  TypeNo?:   number;
  TypeName?: string;
  Image?:    string;
}


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() product: CoffeeProduct | null = null;

}
