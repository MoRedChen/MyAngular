import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // constructor() { }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // 按下註冊的按鈕時會觸發的函式

  signup(): void {

    this.router.navigate(['login'], {
      queryParams: {
      //   name: 'MoRed',
        isSignUp: 'true'
      }
    });

  }

}
