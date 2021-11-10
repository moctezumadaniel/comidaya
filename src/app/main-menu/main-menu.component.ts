import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../services/mainMenu.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass'],
})
export class MainMenuComponent implements OnInit {
  constructor(private mainMenu: MainMenuService) {}
  closeMenu() {
    this.mainMenu.closeMenu();
  }
  ngOnInit(): void {}
}
