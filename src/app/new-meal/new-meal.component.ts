import { Component, OnInit } from '@angular/core';
import { FirebaseStorage } from '../services/firebase-uploads.service';
import { NewMealService } from '../services/new-meal.service';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.sass'],
})
export class NewMealComponent implements OnInit {
  mealNamePlaceholder: string = 'Escribe el nombre de tu comida';
  mealDescriptionPlaceholder: string = 'Escribe la descripción de tu comida';
  newDetailPlaceholder: string = 'Detalle que el cliente puede elegir';
  maximumAmounthPlaceholder: string = 'Órdenes máximas por día';
  constructor(
    public newMealService: NewMealService,
    public firebaseStorage: FirebaseStorage
  ) {}

  updateInformation(event: any) {
    this.newMealService.updateInformation(event);
  }
  uploadImage() {
    this.firebaseStorage.uploadImage(
      this.newMealService.image,
      this.newMealService.imageName
    );
  }
  ngOnInit(): void {}
}
