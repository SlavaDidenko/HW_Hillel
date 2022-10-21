import { createReducer, createAction } from "@reduxjs/toolkit";
export const listAutoCompleteAction = createAction('AUTO_COMPLETE_FILMS');
export const valueAction = createAction('CHANGE_VALUE');
export const listFilmsAction = createAction('LIST_FILMS');
const defaultState = {
  listAutoComplete: [],
  value: '',
  listFilms: [],
}
export const ASYNC_FILMS = "ASYNC_FILMS"
export const ASYNC_AUTOCOMPLETE_FILMS = "ASYNC_FILMS"
export default createReducer(defaultState, {
  [valueAction]: function (state, action) {
    state.value = action.payload;
  },
   [listAutoCompleteAction]: function (state, action) {
    state.listAutoComplete = action.payload || '';
  },
  [listFilmsAction]: function (state, action) {
    state.listFilms = action.payload;
  }
})

export const asyncFilmsCreator = createAction(ASYNC_FILMS);
export const asyncAutoCompleteFilmsCreator = createAction(ASYNC_AUTOCOMPLETE_FILMS);
