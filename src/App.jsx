import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from 'router/ProtectedRoute';
import store from 'store/store';
import routes from 'router/routes';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ProtectedRoute></ProtectedRoute>
        <Routes>
          {routes.map(({ name, path, element }) => (
            <Route key={name} path={path} element={element}></Route>
          ))}
        </Routes>
      </Provider>
    </>
  );
};

export default App;
