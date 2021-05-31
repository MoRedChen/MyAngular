import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // <-- 匯入FormsModule

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// // Module
// import { FeatureModule } from './feature/feature.module';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    LoginComponent,
    LayoutComponent,
    SignupComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    // FeatureModule,
    AppRoutingModule,
    FormsModule // <-- 加入FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
