import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainMenuService {
  status = 'closed';

  openMenu() {
    this.status = 'opened';
  }

  closeMenu() {
    this.status = 'closed';
  }

  isMainMenuOpened() {
    if (this.status === 'opened') {
      return true;
    } else {
      return false;
    }
  }
}
