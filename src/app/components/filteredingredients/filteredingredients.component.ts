import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsDataService } from 'src/app/service/meals-data.service';

@Component({
  selector: 'app-filteredingredients',
  templateUrl: './filteredingredients.component.html',
  styleUrls: ['./filteredingredients.component.css']
})
export class FilteredingredientsComponent implements OnInit{

  constructor(private _MealsDataService:MealsDataService, private _ActivatedRout:ActivatedRoute){}

 meals:any[]=[];
 
  ngOnInit(): void {
    this._ActivatedRout.paramMap.subscribe({     
      next:(params)=>{
       
        let mealIngredient:any= params.get('ingredient')
  
      this._MealsDataService.getFilteredIngredients(mealIngredient).subscribe({
        next:(response)=>{ 
          this.meals=response.meals;
          console.log(this.meals);
        }
      })
    }
  });
  }
  
  
  
  
}
