import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private user: UserService) { }
  productName = {};
  productImg = {};
  shopName = {};
  price = {};
  ngOnInit(): void {
    this.user.getProductData().subscribe(data => {
      let size = Object.keys(data).length;
      for(let i=0;i<size;i++) {
        this.productName[i] = data[i].translates[0].translate;
        this.productImg[i] = data[i].images[0].url;
        this.shopName[i] = data[i].shopName;
        this.price[i] = data[i].combinations[0].price +" AZN";
      }
    })
  }

}
