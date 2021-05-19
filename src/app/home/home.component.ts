import { Component, OnInit } from '@angular/core';

// 載入資料來源。
import { productlist } from '../productlist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor() { }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  show(product): void {
    this.router.navigate(['/show'], {
      queryParams: {
        id: product.product_id,
      }
    });
  }

  // 變數productlists取得資料來源。
  productlists = productlist;

}
