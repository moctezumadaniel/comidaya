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
    console.log(this);
  }
  changeNewIngredient(event: any) {
    this.newIngredient = event.target.value;
  }
  deleteIngredient(event: any) {
    const key = event.target.id;
    if (this.ingredients.length > 1) {
      this.ingredients.splice(key, 1);
    } else {
      this.ingredients = [];
    }
    console.log(this);
  }

  changeIngredient(event: any) {
    const key = event.target.id;
    this.ingredients[key] = event.target.value;
  }
  changeInstructions(event: any) {
    this.instructions = event.target.value;
    console.log(this);
  }
}
