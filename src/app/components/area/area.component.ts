import { Component, OnInit } from '@angular/core';
import { MealsDataService } from 'src/app/service/meals-data.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit  {

  
  constructor( private _mealsDataService:MealsDataService){}

  meals:any[]=[]

  ngOnInit (): void {
    this._mealsDataService.getAllArea().subscribe({
      next:(response)=>{
        this.meals=response.meals;
        console.log(this.meals)
      }
    })
  }
}
