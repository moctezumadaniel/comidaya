import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';
import { MealPreviewComponent } from './meal-preview/meal-preview.component';
import { MealComponent } from './meal/meal.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoriteMealsComponent } from './favorite-meals/favorite-meals.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MealListComponent } from './meal-list/meal-list.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { StoreModule } from '@ngrx/store';
import { navbarReducer } from 'src/redux/reducers/navbar.reducer';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { MyMealsComponent } from './my-meals/my-meals.component';

const appRoutes: Routes = [
  { path: '', component: RecommendationsComponent },
  {
    path: 'nueva-receta',
    loadChildren: () =>
      import('./new-recipe/new-recipe.module').then((m) => m.NewRecipeModule),
  },
  { path: 'receta', component: RecipeComponent },
  { path: 'recetas', component: RecipeListComponent },
  { path: 'recetas-favoritas', component: FavoriteRecipesComponent },
  { path: 'mis-recetas', component: MyRecipesComponent },
  {
    path: 'nueva-comida',
    loadChildren: () =>
      import('./new-meal/new-meal.module').then((m) => m.NewMealModule),
  },
  { path: 'comida', component: MealComponent },
  { path: 'comidas', component: MealListComponent },
  { path: 'comidas-favoritas', component: FavoriteMealsComponent },
  { path: 'mis-comidas', component: MyMealsComponent },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  { path: 'menu', component: MainMenuComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainMenuComponent,
    RecipePreviewComponent,
    MealPreviewComponent,
    MealComponent,
    RecipeComponent,
    RecipeListComponent,
    FavoriteMealsComponent,
    MealListComponent,
    FavoriteRecipesComponent,
    RecommendationsComponent,
    MyRecipesComponent,
    MyMealsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    StoreModule.forRoot({ navbar: navbarReducer }),
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
