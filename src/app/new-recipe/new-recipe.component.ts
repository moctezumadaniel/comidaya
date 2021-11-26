import { Component, OnInit } from '@angular/core';
import { NewRecipeService } from '../services/new-recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.sass'],
})
export class NewRecipeComponent implements OnInit {
  constructor(private newRecipeService: NewRecipeService) {}
  recipeNamePlaceholder: string = 'Escribe el nombre de tu receta';
  newIngredientPlaceholder: string = 'Escribe un nuevo ingrediente';
  instructionsPlaceholder: string = 'Escribe las instrucciones de la receta';
  changeImages() {
    console.log('Cambio de images');
  }
  changeRecipeName(event: any) {
    this.newRecipeService.changeRecipeName(event);
  }
  addIngredient() {
    this.newRecipeService.addIngredient();
  }
  changeNewIngredient(event: any) {
    this.newRecipeService.changeNewIngredient(event);
  }
  changeInstructions(event: any) {
    this.newRecipeService.changeInstructions(event);
  }
  saveRecipe() {
    console.log('Receta guardada');
  }
  ngOnInit(): void {}
}
