import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewMealService {
  image: any = null;
  imageName = '';
  foodName: string = '';
  foodDescription: string = '';
  details: { description: string; id: number }[] = [];
  newDetail: { description: string; id: number } = { description: '', id: 1 };
  maxMeals: string = '';

  updateInformation(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'foodImage':
        if (!event.target.files || !event.target.files[0]) return;
        console.log(event.target.files[0]);
        const reader: FileReader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = (e) => {
          this.image = e.target?.result;
          this.imageName = event.target.files[0].name;
          console.log(this);
        };
        break;
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
        document.getElementById('NewDetail')?.focus();
        break;
      case 'deleteDetail':
        this.details = this.details.filter(
          (item) => item.id !== +event.target.id
        );
        document.getElementById('NewDetail')?.focus();
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
