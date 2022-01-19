import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class NewRecipeService {
  image: any = null;
  recipeName: string = '';
  recipeDescription: string = '';
  ingredients: { description: string; id: number }[] = [];
  instructions: string = '';
  newIngredient: { description: string; id: number } = {
    description: '',
    id: 1,
  };

  updateInformation(event: any) {
    const key = event.target.id;

    switch (event.target.name) {
      case 'recipeName':
        this.recipeName = event.target.value;
        break;
      case 'recipeDescription':
        this.recipeDescription = event.target.value;
        break;
      case 'newRecipeIngredient':
        if (this.newIngredient.description !== '') {
          this.ingredients.push({ ...this.newIngredient });
          this.newIngredient.description = '';
          this.newIngredient.id++;
        }
        document.getElementById('NewIngredient')?.focus();
        break;
      case 'newIngredient':
        this.newIngredient.description = event.target.value;
        break;
      case 'deleteIngredient':
        this.ingredients = this.ingredients.filter((item) => item.id !== +key);
        document.getElementById('NewIngredient')?.focus();
        break;
      case 'ingredient':
        this.ingredients.map((item) => {
          if (item.id === +key) {
            return { ...item, description: event.target.value };
          }
          return item;
        });
        break;
      case 'instructions':
        this.instructions = event.target.value;
        break;
      default:
        return;
    }
  }

  changeImage(event: any) {
    this.image = event.target.result;
  }
}
