import { Component, OnInit } from '@angular/core';

// 載入資料來源。
import { productlist } from '../productlist';
// import { ActivatedRoute } from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  // constructor() { }
  constructor(private activatedRoute: ActivatedRoute) {
    // let id = activatedRoute.snapshot.queryParams['id']; //< HERE
    // console.log(id);
  }

  quantity = 1;

  id;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
  }

  /** 是否已經登入 */
  isLogin() {
    return sessionStorage.getItem('user') !== null;
  }

  // 變數productlists取得資料來源。
  productlists = productlist;

}
