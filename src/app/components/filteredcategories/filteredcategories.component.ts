import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsDataService } from 'src/app/service/meals-data.service';

@Component({
  selector: 'app-filteredcategories',
  templateUrl: './filteredcategories.component.html',
  styleUrls: ['./filteredcategories.component.css']
})
export class FilteredcategoriesComponent implements OnInit{

  constructor(private _MealsDataService:MealsDataService, private _ActivatedRout:ActivatedRoute){}

 meals:any[]=[];
 
  ngOnInit(): void {
    this._ActivatedRout.paramMap.subscribe({     
      next:(params)=>{
       
        let mealCategory:any= params.get('category')
  
      this._MealsDataService.getFilteredCategories(mealCategory).subscribe({
        next:(response)=>{ 
          this.meals=response.meals;
          console.log(this.meals);
        }
      })
    }
  });
  }
  
  
  
  
}

