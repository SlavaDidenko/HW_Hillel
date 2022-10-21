import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ASYNC_AUTOCOMPLETE_FILMS, ASYNC_FILMS, listAutoCompleteAction, listFilmsAction } from 'store/reducers/browseReducer';
import { addFilm, ASYNC_FILM } from 'store/reducers/titleReducer';
import store from 'store/store';
 function* getFilms() {
  let data = [];

  const response = yield call(() =>
    getFilm('https://imdb8.p.rapidapi.com/title/auto-complete', {
      q: 'elc',
    })
  );
  data = yield call(
    () =>
      new Promise(res =>
        res(response.data.d?.filter(el => /t+\d+/i.test(el.id)))
      )
  );
  yield put(listFilmsAction(data));
}

 function* getFilmsAutoComplete() {
  const value = store.getState().browse.value
  let data = [];
  const response = yield call(() =>
    getFilm('https://imdb8.p.rapidapi.com/title/auto-complete', {
      q: value,
    })
  );
  data = yield call(
    () =>
      new Promise(res =>
        res(response.data.d?.filter(el => /t+\d+/i.test(el.id)))
      )
  );
  yield put(listAutoCompleteAction(data));
}

 function getFilm(url, params) {
  const options = {
    method: 'GET',
    url: url,
    params: params,
    headers: {
      'X-RapidAPI-Key': 'd3172cc7camsh5564847dcba877cp139335jsn045ecc600818',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    },
  };
  return axios.request(options);
}

export function* putFilm() {
  const params = store.getState().title.params;
  const getData = yield call(() =>
    getFilm('https://imdb8.p.rapidapi.com/title/get-base', {
      tconst: `${params}`,
    })
  );
  const getRating = yield call(() =>
    getFilm('https://imdb8.p.rapidapi.com/title/get-ratings', {
      tconst: `${params}`,
    })
  );
  const getGenres = yield call(() =>
    getFilm('https://imdb8.p.rapidapi.com/title/get-genres', {
      tconst: `${params}`,
    })
  );
  const data = yield call(() => new Promise(res => res(getData.data)));
  const rating = yield call(() => new Promise(res => res(getRating.data)));
  const genres = yield call(() => new Promise(res => res(getGenres.data)));
  yield put(
    addFilm({
      ...data,
      rating: rating['rating'],
      genres,
    })
  );
}

export function* putFilmWatcher() {
  yield takeEvery(ASYNC_FILM, putFilm);
  yield takeEvery(ASYNC_FILMS, getFilms);
  yield takeEvery(ASYNC_AUTOCOMPLETE_FILMS, getFilmsAutoComplete);
}
