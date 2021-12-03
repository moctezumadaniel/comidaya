import { Component, OnInit } from '@angular/core';
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
  constructor(
    private store: Store<{ navbar: { search: String } }>,
    private mainMenuService: MainMenuService,
    public searchService: SearchService
  ) {}
  ngOnInit() {
    this.search = this.searchService.search;
  }
  openMenu() {
    this.mainMenuService.openMenu();
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
