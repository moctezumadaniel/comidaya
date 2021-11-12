import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search = '';
  status = '';
  updateSearch(value: string) {
    this.search = value;
  }

  fetchSearch() {
    this.status = 'searching';
  }

  finishSearch() {
    this.status = 'searched';
  }
}
