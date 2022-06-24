import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import Shows from 'screens/shows/shows';
import Guard from 'components/guard/guard';
import Login from './screens/login/login';
import { LOGIN_URL } from './screens/login/login.types';
import { GlobalStyle } from './themes/main/global-style';
import { theme } from './themes/main/theme';
import store from './store/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={LOGIN_URL} element={<Login />} />
          <Route path="/movies-list" element={<Guard><Shows /></Guard>} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
