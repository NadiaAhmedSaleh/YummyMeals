import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AreaComponent } from './components/area/area.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FilteredcategoriesComponent } from './components/filteredcategories/filteredcategories.component';
import { FilteredareaComponent } from './components/filteredarea/filteredarea.component';
import { FilteredingredientsComponent } from './components/filteredingredients/filteredingredients.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    AreaComponent,
    IngredientsComponent,
    DetailsComponent,
    ContactUsComponent,
    FilteredcategoriesComponent,
    FilteredareaComponent,
    FilteredingredientsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
