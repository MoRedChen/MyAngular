import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  userMail: string;

  ngOnInit(): void {
  }

  /** 是否已經登入 */
  isLogin() {
    return sessionStorage.getItem('user') !== null;
  }

  /** 登出 */
  logout() {
    sessionStorage.removeItem('user');
  }

}
