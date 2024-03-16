import { Component, OnInit } from '@angular/core';
import { MealsDataService } from 'src/app/service/meals-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft } from 'ngx-animate';
import { slideInRight } from 'ngx-animate';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft))]),
    trigger('slideInRight', [transition('* => *', useAnimation(slideInRight))])
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slideInLeft: any;
  slideInRight:any; 

  constructor( private _mealsDataService:MealsDataService){}

  
  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    navText: ['', ''],
    items:3,
    nav: false
  }


  meals:any[]=[]

  ngOnInit(): void {
    this._mealsDataService.getAllMeals().subscribe({
      next:(response)=>{
        this.meals=response.meals;
        console.log(this.meals)
      }
    })
  }


}



