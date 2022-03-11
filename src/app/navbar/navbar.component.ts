import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { changeMainSearch } from '../../redux/actions/navbar.actions';
import { MainMenuService } from '../services/mainMenu.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  search: string = '';
  userLogged: boolean = false;
  loadingUser: boolean = false;
  constructor(
    private store: Store<{ navbar: { search: String } }>,
    private mainMenuService: MainMenuService,
    public searchService: SearchService,
    public auth: AuthService
  ) {
    auth.isAuthenticated$.subscribe((res) => (this.userLogged = res));
    auth.isLoading$.subscribe((res) => (this.loadingUser = res));
  }
  ngOnInit() {
    this.search = this.searchService.search;
  }
  openMenu() {
    this.mainMenuService.openMenu();
    document.getElementById('body')!.style.overflowY = 'hidden';
  }
  changeSearch(event: any) {
    this.searchService.updateSearch(event.target.value);
  }
  changeTypeOfSearch() {
    this.searchService.changeTypeOfSearch();
  }
  logSearch() {
    console.log(this.searchService.search);
  }
}
