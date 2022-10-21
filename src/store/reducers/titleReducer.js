const { createSlice, createAction } = require('@reduxjs/toolkit');

export const ASYNC_FILM = 'ASYNC_FILM';

const titleReducer = createSlice({
  name: 'title',
  initialState: {
    film: '',
    params: '',
  },
  reducers: {
    addFilm(state, action) {
      state.film = action.payload || '';
    },
    changeParams(state, action) {
      state.params = action.payload || '';
    },
  },
});

export const asyncFilmCreator = createAction(ASYNC_FILM);

export default titleReducer.reducer;
export const { addFilm, changeParams } = titleReducer.actions;
