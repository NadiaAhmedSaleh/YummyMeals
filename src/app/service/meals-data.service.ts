import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsDataService {

  constructor( private _HttpClient:HttpClient) { }

 
  
  getAllMeals():Observable<any>{
   return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=  ')
  }

  getAllCategories():Observable<any>{
    return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php ')
   }

   getAllArea():Observable<any>{
    return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list ')
   }

   getAllIngredients():Observable<any>{
    return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
   }




   getMealsDetails(mealId:number):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
   }



   getFilteredCategories(filteredcategories:any):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filteredcategories}`)
   }


   getFilteredarea(filteredarea:any):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${filteredarea}`)
   }

   getFilteredIngredients(filteredingredients:any):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${filteredingredients}`)
   }


   getSearchedMeals(mealName:string):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    )
   }
}
