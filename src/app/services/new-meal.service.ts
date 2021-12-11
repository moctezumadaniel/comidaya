import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewMealService {
  // images
  foodName: string = '';
  foodDescription: string = '';
  details: { description: string; id: number }[] = [];
  newDetail: { description: string; id: number } = { description: '', id: 1 };
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
        this.newDetail.description = value;
        break;
      case 'maxMeals':
        this.maxMeals = value;
        break;
      case 'addDetail':
        if (this.newDetail.description !== '') {
          this.details.push({ ...this.newDetail });
          this.newDetail.description = '';
          this.newDetail.id++;
          console.log(this);
        }
        break;
      case 'deleteDetail':
        this.details = this.details.filter(
          (item) => item.id !== +event.target.id
        );
        break;
      case 'newDetailAdded':
        this.details = this.details.map((item) => {
          if (item.id === +event.target.id) {
            return { ...item, description: event.target.value };
          }
          return item;
        });
        break;
      default:
        return;
    }
  }
}
