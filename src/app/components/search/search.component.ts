import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MealsDataService } from 'src/app/service/meals-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  constructor(private _MealsDataService:MealsDataService, private _FormsModule:FormsModule){}


  meals:any[]=[];
  mealName:string='';
  

  onSubmit() {

    this._MealsDataService.getSearchedMeals(this.mealName).subscribe({
      next:(response)=>{
        this.meals=response.meals;
        console.log(this.meals);
        
      }
    })
  }

}


