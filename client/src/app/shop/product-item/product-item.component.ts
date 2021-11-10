import { IProduct } from 'src/app/shared/models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  //Recieve input prop from it's parent
  //Or allow access prop from Parent component
  @Input() product: IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
