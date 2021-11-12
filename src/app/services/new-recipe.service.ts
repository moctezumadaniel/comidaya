import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class NewRecipeService {
  images: any;
  recipeName: string = '';
  ingredients: string[] = [];
  instructions: string = '';
  newIngredient: string = '';

  changeImages() {
    console.log('Cambio de images');
  }
  changeRecipeName(event: any) {
    this.recipeName = event.target.value;
  }
  addIngredient() {
    this.ingredients.push(this.newIngredient);
    this.newIngredient = '';
  }
  changeNewIngredient(event: any) {
    this.newIngredient = event.target.value;
  }
  changeInstructions(event: any) {
    this.instructions = event.target.value;
  }
}
