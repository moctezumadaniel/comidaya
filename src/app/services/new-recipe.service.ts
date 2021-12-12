import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class NewRecipeService {
  images: any;
  recipeName: string = '';
  recipeDescription: string = '';
  ingredients: { description: string; id: number }[] = [];
  instructions: string = '';
  newIngredient: { description: string; id: number } = {
    description: '',
    id: 1,
  };

  changeImages() {
    console.log('Cambio de images');
  }
  changeRecipeName(event: any) {
    this.recipeName = event.target.value;
  }

  changeRecipeDescription(event: any) {
    this.recipeDescription = event.target.value;
  }
  addIngredient() {
    if (this.newIngredient.description !== '') {
      this.ingredients.push({ ...this.newIngredient });
      this.newIngredient.description = '';
      this.newIngredient.id++;
    }
    document.getElementById('NewIngredient')?.focus();
  }
  changeNewIngredient(event: any) {
    this.newIngredient.description = event.target.value;
  }
  deleteIngredient(event: any) {
    const key = event.target.id;
    this.ingredients = this.ingredients.filter((item) => item.id !== +key);
    document.getElementById('NewIngredient')?.focus();
  }

  changeIngredient(event: any) {
    const key = event.target.id;
    this.ingredients.map((item) => {
      if (item.id === +key) {
        return { ...item, description: event.target.value };
      }
      return item;
    });
  }
  changeInstructions(event: any) {
    this.instructions = event.target.value;
    console.log(this);
  }
}
