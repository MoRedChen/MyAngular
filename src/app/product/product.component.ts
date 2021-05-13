import { Component, OnInit } from '@angular/core';

// 載入資料來源。
import { productlist } from '../productlist';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // 變數productlists取得資料來源。
  productlists = productlist;

}
