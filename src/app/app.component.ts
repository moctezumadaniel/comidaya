import { Component, OnInit } from '@angular/core';
import { MainMenuService } from './services/mainMenu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [MainMenuService],
})
export class AppComponent implements OnInit {
  constructor(private mainMenu: MainMenuService) {
    this.mainMenuStatus = this.mainMenu.status;
  }
  ngOnInit() {}
  isMainMenuOpened() {
    return this.mainMenu.isMainMenuOpened();
  }
  mainMenuStatus = 'closed';
  title = 'comidaya';
}
