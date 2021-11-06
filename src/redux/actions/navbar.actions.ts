import { createAction, props } from '@ngrx/store';

export const changeMainSearch = createAction(
  'CHANGE_MAIN_SEARCH',
  props<{ search: string }>()
);
