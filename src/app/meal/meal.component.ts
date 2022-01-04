import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.sass'],
})
export class MealComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  maxAmounth: number = 10; //HACER DINAMICO
  amounth: number = 1;
  ngOnInit(): void {
    console.log(this.route);
  }
  increment() {
    if (this.amounth < this.maxAmounth) {
      this.amounth++;
    }
    if (this.amounth === this.maxAmounth) {
      return;
    }
    if (this.amounth > this.maxAmounth) {
      this.amounth = this.maxAmounth;
    }
  }

  decrease() {
    if (this.amounth > 1) {
      this.amounth--;
    }
    if (this.amounth === 1) {
      return;
    }
    if (this.amounth < 1) {
      this.amounth = 1;
    }
  }

  reset() {
    this.amounth = 1;
  }
}
