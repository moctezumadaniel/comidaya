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

  updateInformation(event: any) {
    const name = event.target.name;
    const value = event.target.value;
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
      case 'addDetail':
        this.details.push(this.newDetail);
        this.newDetail = '';
        break;
      default:
        return;
    }
  }
}
