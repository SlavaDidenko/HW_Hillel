import { createReducer, createAction } from "@reduxjs/toolkit";
export const signAction = createAction('LOGGED_IN');

const defaultState = {
  user: JSON.parse(localStorage.getItem('sign')) || false,
}

export default createReducer(defaultState, {
  [signAction]: function (state, action) {
    state.user = action.payload;
  }
})
