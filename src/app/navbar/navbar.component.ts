import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeMainSearch } from '../../redux/actions/navbar.actions';
import { MainMenuService } from '../services/mainMenu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  search = '';
  navbar$: Observable<any>;

  constructor(
    private store: Store<{ navbar: { search: String } }>,
    private mainMenu: MainMenuService
  ) {
    this.navbar$ = this.store.select('navbar');
  }

  ngOnInit(): void {}
  openMenu() {
    this.mainMenu.openMenu();
    console.log('Menu clicked');
  }
  changeSearch() {
    this.store.dispatch(changeMainSearch(this));
  }
}
