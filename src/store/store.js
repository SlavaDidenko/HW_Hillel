import { combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import browseReducer from "./reducers/browseReducer";
import { run } from 'redux-saga/effects';
import titleReducer from "./reducers/titleReducer";
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware } from "@reduxjs/toolkit";
import { putFilmWatcher } from "services/getFilms";
const sagaMiddleware = createSagaMiddleware()
const { default: signReducer } = require("./reducers/signReducer");

const rootReducer = combineReducers({
  sign: signReducer,
  title: titleReducer,
  browse: browseReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware : [...getDefaultMiddleware({thunk: true}), sagaMiddleware],
});

sagaMiddleware.run(putFilmWatcher)
export default store
