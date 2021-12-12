import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../services/mainMenu.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass'],
})
export class MainMenuComponent implements OnInit {
  constructor(
    private mainMenu: MainMenuService,
    private searchService: SearchService
  ) {}
  closeMenu() {
    this.mainMenu.closeMenu();
  }

  changeToRecipes() {
    this.searchService.changeTypeToRecipes();
  }

  changeToMeals() {
    this.searchService.changeTypeToMeals();
  }
  ngOnInit(): void {}
}
