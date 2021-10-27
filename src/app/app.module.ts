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

@NgModule({
  declarations: [AppComponent, NavbarComponent, MainMenuComponent, RecipePreviewComponent, MealPreviewComponent, MealComponent, RecipeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
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
