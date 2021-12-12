import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search = '';
  searchType = 'recipes';
  status = '';
  searchPlaceholder = 'Buscar recetas';
  changeTypeOfSearchIcon = 'fastfood';
  updateSearch(value: string) {
    this.search = value;
  }

  fetchSearch() {
    this.status = 'searching';
  }

  finishSearch() {
    this.status = 'searched';
  }

  changeTypeOfSearch() {
    if (this.searchType === 'recipes') {
      this.searchType = 'meals';
      this.searchPlaceholder = 'Buscar comidas';
      this.changeTypeOfSearchIcon = 'list_alt';
    } else {
      this.searchType = 'recipes';
      this.searchPlaceholder = 'Buscar recetas';
      this.changeTypeOfSearchIcon = 'fastfood';
    }
  }
  changeTypeToRecipes() {
    this.searchType = 'recipes';
    this.searchPlaceholder = 'Buscar recetas';
    this.changeTypeOfSearchIcon = 'fastfood';
    document.getElementById('Search')?.focus();
  }

  changeTypeToMeals() {
    this.searchType = 'meals';
    this.searchPlaceholder = 'Buscar comidas';
    this.changeTypeOfSearchIcon = 'list_alt';
    document.getElementById('Search')?.focus();
  }
}
