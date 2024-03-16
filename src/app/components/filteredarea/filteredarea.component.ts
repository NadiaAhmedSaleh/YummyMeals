import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsDataService } from 'src/app/service/meals-data.service';

@Component({
  selector: 'app-filteredarea',
  templateUrl: './filteredarea.component.html',
  styleUrls: ['./filteredarea.component.css']
})
export class FilteredareaComponent  implements OnInit{

  constructor(private _MealsDataService:MealsDataService, private _ActivatedRout:ActivatedRoute){}

 meals:any[]=[];
 
  ngOnInit(): void {
    this._ActivatedRout.paramMap.subscribe({     
      next:(params)=>{
       
        let mealarea:any= params.get('area')
  
      this._MealsDataService.getFilteredarea(mealarea).subscribe({
        next:(response)=>{ 
          this.meals=response.meals;
          console.log(this.meals);
        }
      })
    }
  });
  }
  
  
  
  
}
