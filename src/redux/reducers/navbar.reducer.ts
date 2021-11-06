import { createReducer, on } from '@ngrx/store';
import { changeMainSearch } from '../actions/navbar.actions';

export const initialState = {
  search: '',
};

const _navbarReducer = createReducer(
  initialState,
  on(changeMainSearch, (state, action) => {
    return {
      ...state,
      search: action.search,
    };
  })
);

export function navbarReducer(state: any, action: any) {
  return _navbarReducer(state, action);
}
