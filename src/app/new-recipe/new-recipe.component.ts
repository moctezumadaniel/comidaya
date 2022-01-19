import { Component, OnInit } from '@angular/core';
import { NewRecipeService } from '../services/new-recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.sass'],
})
export class NewRecipeComponent implements OnInit {
  constructor(public newRecipeService: NewRecipeService) {}
  recipeNamePlaceholder: string = 'Escribe el nombre de tu receta';
  recipeDescriptionPlaceholder: string = 'Escribe la descripción de tu receta';
  newIngredientPlaceholder: string = 'Escribe un nuevo ingrediente';
  instructionsPlaceholder: string = 'Escribe las instrucciones de la receta';

  changeImage(event: any) {
    if (!event.target.files || !event.target.files[0]) return;
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = (e: ProgressEvent<FileReader>): void => {
      this.newRecipeService.changeImage(e);
    };
  }

  updateInformation(event: any): void {
    this.newRecipeService.updateInformation(event);
  }

  saveRecipe() {
    console.log('Receta guardada');
  }
  ngOnInit(): void {
    console.log(this.newRecipeService);
  }
}
