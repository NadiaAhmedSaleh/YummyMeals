import { Component, OnInit } from '@angular/core';
import { MealsDataService } from 'src/app/service/meals-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  
  constructor( private _mealsDataService:MealsDataService){}

  categories:any[]=[]

  ngOnInit(): void {
    this._mealsDataService.getAllCategories().subscribe({
      next:(response)=>{
        this.categories=response.categories;
        console.log(this.categories)
      }
    })
  }
}
