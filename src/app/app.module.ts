import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoriesComponent } from './home-page/categories/categories.component';
import { BannerAdsComponent } from './home-page/banner-ads/banner-ads.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Collections01Component } from './home-page/collections01/collections01.component';
import { Collections02Component } from './home-page/collections02/collections02.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    CategoriesComponent,
    BannerAdsComponent,
    Collections01Component,
    Collections02Component,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    CarouselModule.forRoot(),
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
