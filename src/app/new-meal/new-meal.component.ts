import { Component, OnInit } from '@angular/core';
import { NewMealService } from '../services/new-meal.service';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.sass'],
})
export class NewMealComponent implements OnInit {
  mealNamePlaceholder: string = 'Escribe el nombre de tu comida';
  newDetailPlaceholder: string = 'Detalle que el cliente puede elegir';
  maximumAmounthPlaceholder: string = 'Órdenes máximas por día';
  constructor(public newMealService: NewMealService) {}

  updateInformation(event: any) {
    this.newMealService.updateInformation(
      event.target.name,
      event.target.value
    );
  }
  ngOnInit(): void {}
}
