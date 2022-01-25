import { Component, OnInit } from '@angular/core';
import FirebaseAuth from '../services/firebase-auth.service';
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
    private searchService: SearchService,
    private firebaseAuth: FirebaseAuth
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

  goToSignIn(event: any) {
    event.preventDefault();
    this.firebaseAuth.signIn();
  }
  ngOnInit(): void {}
}
