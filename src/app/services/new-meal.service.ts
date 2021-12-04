import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewMealService {
  // images
  foodName: string = '';
  foodDescription: string = '';
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
      case 'foodDescription':
        this.foodDescription = value;
        break;
      case 'newDetail':
        this.newDetail = value;
        break;
      case 'maxMeals':
        this.maxMeals = value;
        break;
      case 'addDetail':
        if (this.newDetail !== '') {
          this.details.push(this.newDetail);
          this.newDetail = '';
        }
        break;
      case 'deleteDetail':
        if (this.details.length > 1) {
          this.details.splice(event.target.id, 1);
        } else {
          this.details = [];
        }
        break;
      case 'newDetailAdded':
        this.details[event.target.id] = value;
        console.log(this);
        break;
      default:
        return;
    }
  }
}
