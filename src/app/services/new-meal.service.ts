import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewMealService {
  // images
  foodName: string = '';
  details: string[] = [];
  newDetail: string = '';
  maxMeals: string = '';

  updateInformation(name: string, value: string) {
    switch (name) {
      case 'foodName':
        this.foodName = value;
        break;
      case 'newDetail':
        this.newDetail = value;
        break;
      case 'maxMeals':
        this.maxMeals = value;
        break;
      default:
        return;
    }
  }

  addDetail() {
    this.details.push(this.newDetail);
    this.newDetail = '';
  }
}
