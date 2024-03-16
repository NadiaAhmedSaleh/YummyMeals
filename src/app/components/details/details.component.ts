import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsDataService } from 'src/app/service/meals-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _MealsDataService:MealsDataService, private _ActivatedRout:ActivatedRoute){}

  data:any[]=[];
 
  ngOnInit(): void {
    this._ActivatedRout.paramMap.subscribe({     
      next:(params)=>{
       
        let mealId:any= params.get('id')
  
      this._MealsDataService.getMealsDetails(mealId).subscribe({
        next:(response)=>{ 
          this.data=response.meals;
          console.log(this.data);
        }
      })
    }
  });
  }
  
  
  
  
}
