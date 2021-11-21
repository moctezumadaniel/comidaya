import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMealComponent } from './new-meal.component';

const routes: Routes = [{ path: '', component: NewMealComponent }];

@NgModule({
  declarations: [NewMealComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NewMealModule {}
