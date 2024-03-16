import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AreaComponent } from './components/area/area.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetailsComponent } from './components/details/details.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FilteredcategoriesComponent } from './components/filteredcategories/filteredcategories.component';
import { FilteredareaComponent } from './components/filteredarea/filteredarea.component';
import { FilteredingredientsComponent } from './components/filteredingredients/filteredingredients.component';
import { SearchComponent } from './components/search/search.component';



const routes: Routes = [
 
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'area', component:AreaComponent},
    {path:'categories', component:CategoriesComponent},
    {path:'details/:id', component:DetailsComponent},
    {path:'filteredcategories/:category', component:FilteredcategoriesComponent},
    {path:'filteredarea/:area', component:FilteredareaComponent},
    {path:'filteredingredients/:ingredient', component:FilteredingredientsComponent},
    {path:'search', component:SearchComponent},



    {path:'ingredients', component:IngredientsComponent},
    {path:'contactus', component:ContactUsComponent}

   
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
