import { Component, OnInit } from '@angular/core';
import FirebaseAuth from '../services/firebase-auth.service';
import { MainMenuService } from '../services/mainMenu.service';
import { SearchService } from '../services/search.service';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass'],
})
export class MainMenuComponent implements OnInit {
  logged = false;
  loadingUser = false;
  user: User | undefined;
  constructor(
    private mainMenu: MainMenuService,
    private searchService: SearchService,
    private firebaseAuth: FirebaseAuth,
    public auth: AuthService
  ) {
    auth.isAuthenticated$.subscribe((res) => (this.logged = res));
    auth.isLoading$.subscribe((res) => (this.loadingUser = res));
    auth.getUser().subscribe((res) => {
      this.user = res;
    });
    console.log(this.user);
  }

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
