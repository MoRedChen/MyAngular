import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  userMail: string; // 1. binding頁面的[(ngModel)]="userMail"
  userPassword: string; // 2. binding頁面的[(ngModel)]="userPassword"
  isFail: boolean = false; // 3. 是否登入失敗
  warnMessage: string = '帳號或密碼錯誤'; // 4. 登入失敗的錯誤訊息


  ngOnInit(): void {

    // this.router.navigate([''], {
    //   queryParams: {
    //     name: '',
    //     isLogin: 'false'
    //   }
    // });

  }


  // 按下登入的按鈕時會觸發的函式
  /** 5. 登入 */
  login(): void {
    this.isFail = false;
    if (this.userMail === 'test@gmail.com' && this.userPassword === '12345678') {
      sessionStorage.setItem('user', this.userMail);
      this.isFail = false;
      this.router.navigate(['home']);
    } else {
      this.isFail = true;
    }

    // this.router.navigate(['home'], {
    //   queryParams: {
    //   //   name: 'MoRed',
    //     isLogin: 'true'
    //   }
    // });

  }

  /** 6. 是否已經登入 */
  isLogin() {
    return sessionStorage.getItem('user') !== null;
  }

  /** 7. 登出 */
  logout() {
    sessionStorage.removeItem('user');
  }

}
