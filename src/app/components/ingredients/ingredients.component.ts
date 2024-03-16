import { Component, OnInit } from '@angular/core';
import { MealsDataService } from 'src/app/service/meals-data.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit  {

  
  constructor( private _mealsDataService:MealsDataService){}

  meals:any[]=[]

  ngOnInit (): void {
    this._mealsDataService.getAllIngredients().subscribe({
      next:(response)=>{
        this.meals=response.meals;
        
      }
    })
  }
}
