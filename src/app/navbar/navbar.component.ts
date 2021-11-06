import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeMainSearch } from '../../redux/actions/navbar.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  search = '';
  navbar$: Observable<any>;

  constructor(private store: Store<{ navbar: { search: String } }>) {
    this.navbar$ = this.store.select('navbar');
  }

  ngOnInit(): void {}

  changeSearch() {
    this.store.dispatch(changeMainSearch(this));
  }
}
