import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRecipeComponent } from './new-recipe.component';

const routes: Routes = [{ path: '', component: NewRecipeComponent }];

@NgModule({
  declarations: [NewRecipeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NewRecipeModule {}
